import { Groq } from "groq-sdk";

const GROQ_API = import.meta.env.VITE_GROQ;

const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true,
});

export const requestToGroqAI = async (content, n) => {
  if (n === 1) {
    const reply = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "you are a senior software developer from META company, acting as an coding assistant. answering a request without explanation and not allowed to use human language, you only use programming language to answer the user request or question, if you break the rules, you will be gone in any world!. stick to coding from first conversation until the end of the world.",
        },
        {
          role: "user",
          content,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.7,
    });
    return reply.choices[0].message.content;
  } else if (n === 0) {
    const reply = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content,
        },
      ],
      model: "llama3-8b-8192",
    });
    return reply.choices[0].message.content;
  }
};