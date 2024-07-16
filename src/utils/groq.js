import { Groq } from "groq-sdk";

const GROQ_API = import.meta.env.VITE_GROQ;

const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true,
});

export const requestToGroqAI = async (content, system) => {
  const reply = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: system,
      },
      {
        role: "user",
        content,
      },
    ],
    model: "llama3-8b-8192",
  });
  return reply.choices[0].message.content;
};
