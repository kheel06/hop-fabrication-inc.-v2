import { NextResponse } from "next/server";
import { generateAIResponse } from "@/lib/ai";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "HOP Fabrications AI Chat API is running.",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body.message;
    const conversation = body.conversation || [];

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        {
          error: "Message is required",
        },
        {
          status: 400,
        }
      );
    }

    const response = await generateAIResponse(
      message,
      conversation
    );

    return NextResponse.json({
      response,
    });
  } catch (error) {
    console.error("AI CHAT ERROR:", error);

    return NextResponse.json(
      {
        error: "AI service unavailable",
      },
      {
        status: 500,
      }
    );
  }
}