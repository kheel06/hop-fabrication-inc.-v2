const PAGE_ACCESS_TOKEN =
  process.env.META_PAGE_ACCESS_TOKEN;

export async function sendMessengerMessage(
  recipientId: string,
  text: string
) {
  if (!PAGE_ACCESS_TOKEN) {
    throw new Error(
      "META_PAGE_ACCESS_TOKEN is not configured"
    );
  }

  const response = await fetch(
    "https://graph.facebook.com/vXX.X/me/messages",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        recipient: {
          id: recipientId,
        },

        message: {
          text,
        },

        access_token: PAGE_ACCESS_TOKEN,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("META SEND ERROR:", data);

    throw new Error(
      data?.error?.message ||
      "Failed to send Messenger message"
    );
  }

  return data;
}