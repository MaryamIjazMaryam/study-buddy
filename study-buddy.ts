 import { GoogleGenAI } from "@google/genai";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const ai = new GoogleGenAI({});

const MODEL = "gemini-3.5-flash-lite";

const chat = ai.chats.create({
  model: MODEL,
  config: {
    systemInstruction:
      "You are a friendly study buddy for a software engineering student. " +
      "Explain things in plain, simple words with short examples. " +
      "If the student types 'quiz', ask ONE short multiple-choice question " +
      "about the topic we just talked about, then wait for their answer " +
      "and tell them if they were right.",
  },
});

async function sendWithRetry(message: string) {
  const maxTries = 5;
  for (let attempt = 1; attempt <= maxTries; attempt++) {
    try {
      return await chat.sendMessage({ message });
    } catch (err) {
      if (attempt === maxTries) {
        console.log("\nGoogle is too busy right now. Please wait a minute and ask again.\n");
        return null;
      }
      console.log(`Buddy is busy, trying again (${attempt}/${maxTries})...`);
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
  return null;
}

const rl = readline.createInterface({ input, output });
console.log("Study Buddy ready! Type 'quiz' for a question or 'exit' to quit.\n");

while (true) {
  const question = await rl.question("You: ");
  if (question.trim().toLowerCase() === "exit") break;

  const response = await sendWithRetry(question);
  if (response) {
    console.log("\nBuddy:", response.text, "\n");
  }
}

rl.close();