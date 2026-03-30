// Vercel Serverless Function - API Proxy
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, system } = req.body;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    if (!apiKey) {
      console.error('API key not configured');
      return res.status(500).json({ error: 'API key not configured' });
    }

    const requestBody = {
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: system,
      messages: messages
    };

    console.log('Sending request to Anthropic API...');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(requestBody)
    });

    const responseText = await response.text();
    console.log('Anthropic API response status:', response.status);
    
    if (!response.ok) {
      console.error('API Error:', responseText);
      return res.status(response.status).json({ 
        error: `API Error: ${response.status}`,
        details: responseText 
      });
    }

    const data = JSON.parse(responseText);
    return res.status(200).json(data);

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}
