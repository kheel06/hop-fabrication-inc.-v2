import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body.message;
    const conversation = body.conversation || [];

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const messages = [
      {
        role: "system" as const,
        content: `
You are the AI Project Assistant for HOP Fabrications Inc.

HOP Fabrications builds custom food carts, food kiosks, mobile food concepts,
and custom fabrication projects.

Your job is to help potential customers describe their project.

Be friendly, professional, concise, and helpful.

Ask useful questions such as:
- What type of food business are they planning?
- What will they be selling?
- Do they need a food cart, kiosk, trailer, or another structure?
- What size do they have in mind?
- Where will it be used?
- Do they have a target budget?
- Do they already have branding or a design?

Do NOT invent prices or guarantees.

If the customer wants a quote, encourage them to request a quote from HOP Fabrications.

Keep responses relatively short because this is a website chat widget.
        `,
      },

      ...conversation
        .filter(
          (item: any) =>
            item &&
            (item.role === "user" || item.role === "assistant") &&
            typeof item.content === "string"
        )
        .map((item: any) => ({
          role: item.role,
          content: item.content,
        })),

      {
        role: "user" as const,
        content: message,
      },
    ];

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
      max_completion_tokens: 500,
    });

    const response =
      completion.choices[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({
      response,
    });
  } catch (error) {
    console.error("AI CHAT ERROR:", error);

    return NextResponse.json(
      {
        error: "AI service failed",
      },
      {
        status: 500,
      }
    );
  }
}