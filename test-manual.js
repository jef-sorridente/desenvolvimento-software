require("dotenv").config();
const { sendPromptToGemini } = require("./app");

const apiKey = process.env.GEMINI_API_KEY;

sendPromptToGemini("Qual é a capital do Brasil?", apiKey)
  .then((resposta) => console.log("Resposta:", resposta))
  .catch((err) => console.error("Erro:", err.message));