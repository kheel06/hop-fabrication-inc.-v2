import { NextResponse } from "next/server";

type Lead = {
  id: string;
  project: string;
  conversation: string[];
  createdAt: string;
};

const leads = new Map<string, Lead>();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const project = body.project || "Website inquiry";
    const conversation = body.conversation || [];

    const id = crypto.randomUUID();

    leads.set(id, {
      id,
      project,
      conversation,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      leadId: id,
    });
  } catch (error) {
    console.error("LEAD CREATION ERROR:", error);

    return NextResponse.json(
      {
        error: "Unable to create lead",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Lead API is running.",
  });
}