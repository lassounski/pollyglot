import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export async function translateMessage(message: string, language: string): Promise<OpenAI.Chat.Completions.ChatCompletion> {
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": [
                    {
                        "type": "text",
                        "text": "You are an expert in languages and a great translator. Translate messages in between ###, but do not add the ### to your response. You are very kind and never say something hurtful. If someone asks your to translate something that is hateful you say in the translated language that you are a buddhist."
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": `Please translate the following message ### ${message} ### in the language "${language}. The response should be just the translation."`
                    }
                ]
            },
        ],
        temperature: 0.4,
        max_tokens: 128,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        response_format: {
            "type": "text"
        },
    });
    return response;
}

