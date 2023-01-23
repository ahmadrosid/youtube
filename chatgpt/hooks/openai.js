export default function useOpenAi() {
  function randomIdx(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateTitle(message) {
    return message.split(" ").slice(0, randomIdx(4, 8)).join(" ");
  }

  async function generateText(message) {
    let prompt = "Let's think step by step. You will as AI bot and reply any question with markdown format and when you will show to code please follow this format eg: ```py\nprint(1)\n```\n";
    return generate(prompt + message + "\n")
  }

  async function generate(message) {
    let body = {
      "model": "text-davinci-003",
      "prompt": message,
      "temperature": 0.7,
      "max_tokens": 1024,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0
    }

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    };
    
    let response = await fetch('api/ask', options)
      .then(response => response.json());
    if (Array.isArray(response.choices)) {
      return response.choices[0].text
    }

    return Promise.reject("Failed to generate text!");
  }

  return { generateText, generateTitle }
}