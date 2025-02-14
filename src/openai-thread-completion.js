const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env["OPENAI_API_KEY"]
});
const openai = new OpenAIApi(configuration);

const model = process.env["OPENAI_MODEL_NAME"] ?? 'gpt-3.5-turbo'
const max_tokens = Number(process.env["OPENAI_MAX_TOKENS"] ?? 2000)

async function continueThread(messages) {
    const response = await openai.createChatCompletion({
        messages: messages,
        model,
        max_tokens
    });
    return response.data?.choices?.[0]?.message?.content
}

module.exports = { continueThread }
