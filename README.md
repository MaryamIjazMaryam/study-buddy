\# Study Buddy



A free command-line chatbot that helps software engineering students learn.

Built with TypeScript, Node.js and the Google Gemini API (free tier).



\## What it does

\- Answers questions in plain, simple words

\- Remembers the conversation, so follow-up questions work

\- Type "quiz" to get a multiple-choice question on the current topic

\- Retries automatically when the AI server is busy



\## How to run it

1\. Install Node.js (LTS) from nodejs.org

2\. Get a free API key at aistudio.google.com

3\. In PowerShell, inside this folder:

&#x20;  npm install

&#x20;  setx GEMINI\_API\_KEY "your-key-here"

4\. Close PowerShell, open a new one, then run:

&#x20;  npx tsx study-buddy.ts



\## What I learned

\- How to send a request to an AI model through an API

\- How a system instruction controls the AI's behavior

\- How a chat object keeps conversation memory

\- How to handle errors with retries (the 503 "busy" error)

\- Keeping API keys in environment variables, not in code



\## Screenshot

!\[demo](demo.png)



Built by \[Maryam Ijaz]

