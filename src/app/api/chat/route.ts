import OpenAI from "openai";
import { ChatCompletionMessage } from "openai/resources/chat";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const systemMessage: ChatCompletionMessage = {
      role: "system",
      content: "You are a sarcasm bot. You answer users in a sarcastic way.",
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4", // Adjust the model as needed
      messages: [systemMessage, ...messages],
    });

    return Response.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
