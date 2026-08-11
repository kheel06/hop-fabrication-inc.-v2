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
    token === VERIFY_TOKEN &&
    challenge
  ) {
    return new Response(challenge, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return new Response("Forbidden", {
    status: 403,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.object !== "page") {
      return NextResponse.json({
        status: "ignored",
      });
    }

    for (const entry of body.entry || []) {
      for (const event of entry.messaging || []) {
        const senderId = event.sender?.id;
        const messageText = event.message?.text;

        if (!senderId || !messageText) {
          continue;
        }

        console.log(
          "CUSTOMER:",
          senderId,
          messageText
        );

        const aiResponse =
          await generateAIResponse(messageText);

        await sendMessengerMessage(
          senderId,
          aiResponse
        );
      }
    }

    return NextResponse.json({
      status: "EVENT_RECEIVED",
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