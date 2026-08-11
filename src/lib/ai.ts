import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateAIResponse(
  message: string,
  conversation: string[] = []
) {
  const systemPrompt = `
You are the AI assistant for HOP Fabrications Inc.

HOP Fabrications specializes in custom fabrication including:
- Food carts
- Coffee carts
- Food kiosks
- Commercial kiosks
- Custom mobile food and beverage concepts
- Custom fabrication projects

Your job is to help potential customers understand the process
and collect useful project information.

Be professional, friendly, concise, and helpful.

Try to learn:
1. What they want to build
2. Type of business
3. Approximate size
4. Preferred style/materials
5. Equipment needed
6. Location
7. Target date
8. Budget, if they are comfortable sharing it

Do NOT invent exact prices.

Do NOT promise exact fabrication timelines.

If information is missing, ask a useful question.

When appropriate, encourage the customer to contact HOP Fabrications
directly through Messenger.

The customer is currently chatting through the HOP Fabrications website.
`;

  const messages = [
    {
      role: "system" as const,
      content: systemPrompt,
    },

    ...conversation.map((msg) => ({
      role: "user" as const,
      content: msg,
    })),

    {
      role: "user" as const,
      content: message,
    },
  ];

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages,
    temperature: 0.5,
    max_tokens: 500,
  });

  return (
    completion.choices[0]?.message?.content ||
    "Sorry, I wasn't able to respond. Please message HOP Fabrications directly."
  );
}