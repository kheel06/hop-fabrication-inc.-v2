import { NextResponse } from "next/server";
import { generateAIResponse } from "@/lib/ai";
import { sendMessengerMessage } from "@/lib/meta-messenger";

const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (
    mode === "subscribe" &&
    token === VERIFY_TOKEN
  ) {
    return new Response(challenge);
  }

  return new Response("Forbidden", {
    status: 403,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log(
      "MESSENGER WEBHOOK:",
      JSON.stringify(body, null, 2)
    );

    if (body.object !== "page") {
      return NextResponse.json(
        { received: false },
        { status: 404 }
      );
    }

    for (const entry of body.entry || []) {
      for (const event of entry.messaging || []) {
        const senderId = event.sender?.id;
        const messageText = event.message?.text;

        // Ignore events without text
        if (!senderId || !messageText) {
          continue;
        }

        console.log("Messenger message:", {
          senderId,
          messageText,
        });

        // Send message to your AI
        const aiResponse = await generateAIResponse(
          messageText
        );

        console.log("AI response:", aiResponse);

        // Send AI response back to Messenger
        await sendMessengerMessage(
          senderId,
          aiResponse
        );
      }
    }

    return NextResponse.json({
      received: true,
    });
  } catch (error) {
    console.error(
      "MESSENGER WEBHOOK ERROR:",
      error
    );

    return NextResponse.json(
      {
        error: "Webhook processing failed",
      },
      {
        status: 500,
      }
    );
  }
}