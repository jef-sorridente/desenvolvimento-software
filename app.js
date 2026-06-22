// SDK oficial do Google para uso da API Gemini
const { GoogleGenAI } = require("@google/genai");

// Modelo Gemini a ser utilizado
const GEMINI_MODEL = "gemini-3.5-flash";


// Valida e monta o prompt antes de enviar
function buildPrompt(prompt) {
  if (!prompt || prompt.trim() === "") {
    throw new Error("O prompt não pode ser vazio.");
  }
  return prompt.trim();
}


// Extrai o texto da resposta retornada pelo SDK
function extractTextFromResponse(response) {
  if (!response || !response.text) {
    throw new Error("Resposta inválida recebida da API.");
  }
  return response.text;
}


// Envia o prompt para a API do Gemini e retorna a resposta
async function sendPromptToGemini(prompt, apiKey) {
  // Valida o prompt antes de enviar
  const validatedPrompt = buildPrompt(prompt);

  // Inicializa o cliente com a chave da API
  const ai = new GoogleGenAI({ apiKey });

  // Faz a chamada para a API
  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: validatedPrompt,
  });

  // Extrai e retorna o texto da resposta
  return extractTextFromResponse(response);
}


// Exporta as funções para uso em outros arquivos (testes, etc.)
module.exports = {
  buildPrompt,
  extractTextFromResponse,
  sendPromptToGemini,
};