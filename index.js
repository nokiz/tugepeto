const { Configuration, OpenAIApi } = require("openai");

async function main() {
  const configuration = new Configuration({
    //apiKey: process.env.OPENAI_API_KEY,
    apiKey: '',
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say hello",
  });
  console.log(completion.data.choices[0].text);
}

main();