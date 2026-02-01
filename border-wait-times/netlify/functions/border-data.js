exports.handler = async function(event, context) {
  // Get the URL from the request
  const { url } = event.queryStringParameters;
  
  // Validate we got a URL
  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'URL parameter required' })
    };
  }

  try {
    // Fetch from the government API (server-side, no CORS issues!)
    const response = await fetch(url);
    const data = await response.text();
    
    // Send it back with CORS headers so browser can access it
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain'
      },
      body: data
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};