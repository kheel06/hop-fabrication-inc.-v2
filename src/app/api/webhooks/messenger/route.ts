import { NextResponse } from "next/server";

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
    console.log("META WEBHOOK VERIFIED");

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

    console.log(
      "MESSENGER WEBHOOK:",
      JSON.stringify(body, null, 2)
    );

    return NextResponse.json({
      status: "EVENT_RECEIVED",
    });
  } catch (error) {
    console.error("MESSENGER WEBHOOK ERROR:", error);

    return NextResponse.json(
      { error: "Invalid webhook" },
      { status: 400 }
    );
  }
}