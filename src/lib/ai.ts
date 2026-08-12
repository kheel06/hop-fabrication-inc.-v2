import Groq from "groq-sdk";

const apiKey = process.env.GROQ_API_KEY;

if (!apiKey) {
  console.error("GROQ_API_KEY is missing from environment variables.");
}

const groq = apiKey
  ? new Groq({
      apiKey,
    })
  : null;

const SYSTEM_PROMPT = `
You are the AI Project Assistant for HOP Fabrications Inc.

HOP Fabrications specializes in:
- Custom food carts
- Food kiosks
- Mobile food concepts
- Custom fabrication
- Commercial fabrication projects
- Custom structures and installations

Your primary job is to help potential customers clearly describe
their project and guide them toward the next step.

Be friendly, professional, concise, and helpful.

Ask ONE useful question at a time.

When appropriate, learn about:

- Type of food business
- What they will be selling
- Cart, kiosk, trailer, or other structure
- Approximate dimensions
- Materials
- Where the project will be used
- Indoor or outdoor use
- Target budget
- Timeline
- Existing branding
- Existing drawings or designs
- Reference images

Do NOT invent prices.

Do NOT promise exact costs, delivery dates, engineering approval,
permits, certifications, or manufacturing capabilities unless the
customer has provided that information.

If the customer asks for pricing, explain that HOP needs project
details before a proper quote can be prepared.

If the customer wants a quote, guide them toward requesting a quote
from HOP Fabrications.

If the customer wants to speak with a person, tell them that the
HOP team can continue the conversation through Messenger.

Keep responses relatively short because this is a website chat widget.

Avoid long paragraphs.

Sound like a helpful HOP project consultant, not a generic AI chatbot.
`;

type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function generateAIResponse(
  message: string,
  conversation: ConversationMessage[] = []
) {
  if (!groq) {
    throw new Error(
      "GROQ_API_KEY is not configured. Add GROQ_API_KEY to .env.local and restart the development server."
    );
  }

  if (!message?.trim()) {
    throw new Error("Message cannot be empty.");
  }

  const messages = [
    {
      role: "system" as const,
      content: SYSTEM_PROMPT,
    },

    ...conversation
      .filter(
        (item) =>
          item &&
          (item.role === "user" || item.role === "assistant") &&
          typeof item.content === "string" &&
          item.content.trim().length > 0
      )
      .map((item) => ({
        role: item.role,
        content: item.content,
      })),

    {
      role: "user" as const,
      content: message.trim(),
    },
  ];

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
      max_completion_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      throw new Error("Groq returned an empty response.");
    }

    return response.trim();
  } catch (error) {
    console.error("========== GROQ ERROR ==========");
    console.error(error);
    console.error("================================");

    throw error;
  }
}