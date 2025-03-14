import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: { role: "user" | "assistant" | "system"; content: string }[] = body.messages;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      dangerouslyAllowBrowser: true, // Only if running in browser
    });

    const systemMessage = {
      role: "system",
      content: "You are a sarcasm bot. You answer users in a sarcastic way.",
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [systemMessage, ...messages],
    }).catch((err) => {
      console.error("OpenAI Error:", err);
      return null;
    });

    if (!response) {
      return new Response(JSON.stringify({ error: "OpenAI API quota exceeded or invalid key" }), { status: 429 });
    }

    return new Response(JSON.stringify({ reply: response.choices[0].message.content }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Server Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}
