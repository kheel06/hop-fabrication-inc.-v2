import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
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

If the customer wants to speak with a human or continue with the HOP team,
tell them that you can help connect them with the HOP team through Messenger.

Keep responses relatively short because this is a website chat widget.
`;

type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function generateAIResponse(
  message: string,
  conversation: ConversationMessage[] = []
) {
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
          typeof item.content === "string"
      )
      .map((item) => ({
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

  return (
    completion.choices[0]?.message?.content ||
    "Sorry, I couldn't generate a response."
  );
}