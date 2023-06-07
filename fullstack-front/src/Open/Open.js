const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
	apiKey: "API_HERE",
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {
	const prompt = `
        create me a random user in the following parsable JSON format:

        {
            "name": "name",
            "username": "username",
            "email": "email"
        }

    `;

	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: prompt,
		max_tokens: 2048,
		temperature: 1,
	});

	const parsableJSONresponse = response.data.choices[0].text.trim();
	const parsedResponse = JSON.parse(parsableJSONresponse);

    return parsedResponse;
};

module.exports = runPrompt;
