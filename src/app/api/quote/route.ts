import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { escapeHtml } from "@/lib/escape-html";

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(100),

  business: z
    .string()
    .trim()
    .max(150)
    .optional()
    .or(z.literal("")),

  phone: z.string().trim().min(7).max(30),

  email: z
    .string()
    .trim()
    .email()
    .max(200),

  type: z
    .string()
    .trim()
    .min(1)
    .max(100),

  message: z
    .string()
    .trim()
    .min(5)
    .max(3000),
});

export async function POST(request: Request) {
  try {
    // =====================================================
    // 1. ENVIRONMENT VARIABLES
    // =====================================================

    const resendApiKey = process.env.RESEND_API_KEY;
    const quoteEmail = process.env.QUOTE_EMAIL;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "HOP Fabrications <onboarding@resend.dev>";

    if (!resendApiKey) {
      console.error("❌ RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          error:
            "Server configuration error: RESEND_API_KEY is missing.",
        },
        { status: 500 }
      );
    }

    if (!quoteEmail) {
      console.error("❌ QUOTE_EMAIL is missing.");

      return NextResponse.json(
        {
          error:
            "Server configuration error: QUOTE_EMAIL is missing.",
        },
        { status: 500 }
      );
    }

    // =====================================================
    // 2. READ REQUEST
    // =====================================================

    const body = await request.json();

    console.log("📩 QUOTE REQUEST RECEIVED:", body);

    // =====================================================
    // 3. VALIDATE DATA
    // =====================================================

    const validation = quoteSchema.safeParse(body);

    if (!validation.success) {
      console.error(
        "❌ QUOTE VALIDATION ERROR:",
        validation.error.flatten()
      );

      return NextResponse.json(
        {
          error:
            "Please check the information you entered.",
          details: validation.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = validation.data;

    console.log("✅ QUOTE DATA VALIDATED:", data);

    // =====================================================
    // 4. SAVE TO SUPABASE
    // =====================================================

    console.log("💾 SAVING QUOTE TO SUPABASE...");

    const { error: supabaseError } =
      await supabaseAdmin
        .from("quote_requests")
        .insert({
          name: data.name,
          business: data.business || null,
          phone: data.phone,
          email: data.email,
          type: data.type,
          message: data.message,
        });

    if (supabaseError) {
      console.error(
        "❌ SUPABASE INSERT ERROR:",
        supabaseError
      );

      return NextResponse.json(
        {
          error:
            "We couldn't save your quote request.",

          details:
            process.env.NODE_ENV === "development"
              ? supabaseError.message
              : undefined,

          code:
            process.env.NODE_ENV === "development"
              ? supabaseError.code
              : undefined,
        },
        { status: 500 }
      );
    }

    console.log("✅ QUOTE SAVED TO SUPABASE");

    // =====================================================
    // 5. CREATE RESEND CLIENT
    // =====================================================

    const resend = new Resend(resendApiKey);

    // =====================================================
    // 6. SEND EMAIL TO HOP FABRICATIONS
    // =====================================================

    console.log(
      "📧 SENDING INTERNAL QUOTE EMAIL..."
    );

    const internalEmail =
      await resend.emails.send({
        from: fromEmail,

        to: [quoteEmail],

        replyTo: data.email,

        subject:
          `New Quote Request — ${data.name}`,

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #111;
              max-width: 700px;
              margin: 0 auto;
              padding: 20px;
            "
          >

            <h2>
              New Quote Request
            </h2>

            <p>
              A new project quote request has been
              submitted through the HOP Fabrications website.
            </p>

            <hr />

            <h3>
              Client Information
            </h3>

            <p>
              <strong>Name:</strong><br />
              ${escapeHtml(data.name)}
            </p>

            <p>
              <strong>Business:</strong><br />
              ${escapeHtml(
                data.business || "Not provided"
              )}
            </p>

            <p>
              <strong>Phone:</strong><br />
              ${escapeHtml(data.phone)}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${escapeHtml(data.email)}
            </p>

            <p>
              <strong>Project Type:</strong><br />
              ${escapeHtml(data.type)}
            </p>

            <h3>
              Project Details
            </h3>

            <p>
              ${escapeHtml(data.message).replace(
                /\n/g,
                "<br />"
              )}
            </p>

            <hr />

            <p
              style="
                font-size: 12px;
                color: #777;
              "
            >
              Submitted from the HOP Fabrications website.
            </p>

          </div>
        `,
      });

    // =====================================================
    // 7. CHECK INTERNAL EMAIL
    // =====================================================

    if (internalEmail.error) {
      console.error(
        "❌ INTERNAL EMAIL ERROR:",
        internalEmail.error
      );

      // IMPORTANT:
      // Supabase already contains the quote.
      // We don't delete it just because email failed.
      return NextResponse.json({
        success: true,
        saved: true,
        internalEmailSent: false,
        confirmationEmailSent: false,
        warning:
          "Your quote was saved, but email delivery failed.",
      });
    }

    console.log(
      "✅ INTERNAL QUOTE EMAIL SENT:",
      internalEmail.data
    );

    // =====================================================
    // 8. SEND CONFIRMATION EMAIL TO CUSTOMER
    // =====================================================

    console.log(
      "📧 SENDING CUSTOMER CONFIRMATION EMAIL..."
    );

    const confirmationEmail =
      await resend.emails.send({
        from: fromEmail,

        to: [data.email],

        replyTo: quoteEmail,

        subject:
          "We received your quote request — HOP Fabrications",

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              line-height: 1.7;
              color: #111;
              max-width: 650px;
              margin: 0 auto;
              padding: 30px 20px;
            "
          >

            <div
              style="
                border-bottom: 3px solid #d4af37;
                padding-bottom: 18px;
                margin-bottom: 30px;
              "
            >
              <h1
                style="
                  margin: 0;
                  font-size: 28px;
                "
              >
                HOP Fabrications
              </h1>

              <p
                style="
                  margin: 6px 0 0;
                  color: #777;
                  font-size: 13px;
                "
              >
                Built around your business.
              </p>
            </div>

            <h2>
              Thank you, ${escapeHtml(data.name)}.
            </h2>

            <p>
              We've received your project quote request
              successfully.
            </p>

            <p>
              Our team will review the information you
              provided and get back to you as soon as
              possible.
            </p>

            <div
              style="
                background: #f7f7f7;
                border-radius: 12px;
                padding: 22px;
                margin: 30px 0;
              "
            >

              <h3
                style="
                  margin-top: 0;
                "
              >
                Your Request
              </h3>

              <p>
                <strong>Business:</strong><br />
                ${escapeHtml(
                  data.business || "Not provided"
                )}
              </p>

              <p>
                <strong>Project Type:</strong><br />
                ${escapeHtml(data.type)}
              </p>

              <p>
                <strong>Contact Number:</strong><br />
                ${escapeHtml(data.phone)}
              </p>

              <p>
                <strong>Project Details:</strong><br />
                ${escapeHtml(data.message).replace(
                  /\n/g,
                  "<br />"
                )}
              </p>

            </div>

            <p>
              If you need to add anything to your request,
              simply reply to this email.
            </p>

            <p>
              Thank you for considering
              <strong>HOP Fabrications</strong>.
            </p>

            <br />

            <p
              style="
                color: #777;
                font-size: 13px;
              "
            >
              HOP Fabrications Inc.<br />
              Custom Fabrication & Business Solutions
            </p>

          </div>
        `,
      });

    // =====================================================
    // 9. CHECK CUSTOMER EMAIL
    // =====================================================

    if (confirmationEmail.error) {
      console.error(
        "❌ CUSTOMER CONFIRMATION EMAIL ERROR:",
        confirmationEmail.error
      );

      // Quote is already saved.
      // Internal HOP email was already sent.
      return NextResponse.json({
        success: true,
        saved: true,
        internalEmailSent: true,
        confirmationEmailSent: false,
        warning:
          "Your request was received, but we couldn't send the confirmation email.",
      });
    }

    console.log(
      "✅ CUSTOMER CONFIRMATION EMAIL SENT:",
      confirmationEmail.data
    );

    // =====================================================
    // 10. EVERYTHING SUCCESSFUL
    // =====================================================

    return NextResponse.json({
      success: true,
      saved: true,
      internalEmailSent: true,
      confirmationEmailSent: true,
    });

  } catch (error) {
    console.error(
      "🔥 QUOTE API CRASH:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong while submitting your quote.",

        details:
          process.env.NODE_ENV === "development" &&
          error instanceof Error
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}