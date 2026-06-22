// Importa as funções que serão testadas
const { buildPrompt, extractTextFromResponse, sendPromptToGemini } = require("../app");

// Testes da função buildPrompt (validação de envio)
describe("Teste 1 - Validação do envio do prompt", () => {

  // Deve lançar erro se o prompt estiver vazio
  test("Deve lançar erro se o prompt for vazio", () => {
    expect(() => buildPrompt("")).toThrow("O prompt não pode ser vazio.");
  });

  // Deve lançar erro se o prompt for só espaços
  test("Deve lançar erro se o prompt for apenas espaços", () => {
    expect(() => buildPrompt("   ")).toThrow("O prompt não pode ser vazio.");
  });

  // Deve retornar o prompt limpo se for válido
  test("Deve retornar o prompt sem espaços extras se for válido", () => {
    expect(buildPrompt("  Olá  ")).toBe("Olá");
  });

});

// Testes da função extractTextFromResponse (validação de recebimento)
describe("Teste 2 - Validação do recebimento da resposta", () => {

  // Deve extrair o texto corretamente de uma resposta válida
  test("Deve extrair o texto corretamente de uma resposta válida", () => {
    const respostaMock = { text: "Brasília é a capital do Brasil." };
    expect(extractTextFromResponse(respostaMock)).toBe("Brasília é a capital do Brasil.");
  });

  // Deve lançar erro se a resposta for inválida
  test("Deve lançar erro se a resposta for inválida", () => {
    expect(() => extractTextFromResponse(null)).toThrow("Resposta inválida recebida da API.");
  });

  // Deve lançar erro se a resposta não tiver texto
  test("Deve lançar erro se a resposta não tiver texto", () => {
    expect(() => extractTextFromResponse({})).toThrow("Resposta inválida recebida da API.");
  });

});