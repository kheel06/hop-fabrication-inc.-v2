const PAGE_ACCESS_TOKEN =
  process.env.META_PAGE_ACCESS_TOKEN;

export async function sendMessengerMessage(
  recipientId: string,
  message: string
) {
  if (!PAGE_ACCESS_TOKEN) {
    throw new Error(
      "META_PAGE_ACCESS_TOKEN is not configured"
    );
  }

  const response = await fetch(
    `https://graph.facebook.com/vXX.X/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
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
          text: message,
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(
      "MESSENGER API ERROR:",
      data
    );

    throw new Error(
      data?.error?.message ||
        "Failed to send Messenger message"
    );
  }

  return data;
}