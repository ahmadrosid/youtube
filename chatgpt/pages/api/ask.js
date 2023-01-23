// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let apiToken = "...";
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Authorization: 'Bearer ' + apiToken},
    body: JSON.stringify(req.body)
  };
  
  let response = await fetch('https://api.openai.com/v1/completions', options)
    .then(response => response.json());
  res.status(200).json(response)
}
