const BASE_URL = "https://www.omdbapi.com/";

exports.handler = async function (event) {
  const apiKey = process.env.OMDB_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ Response: "False", Error: "API key not configured." }),
    };
  }

  const { s, page = "1", type = "movie" } = event.queryStringParameters || {};
  if (!s) {
    return {
      statusCode: 400,
      body: JSON.stringify({ Response: "False", Error: "Missing search query." }),
    };
  }

  const url = new URL(BASE_URL);
  url.searchParams.set("apikey", apiKey);
  url.searchParams.set("s", s);
  url.searchParams.set("page", page);
  url.searchParams.set("type", type);

  const response = await fetch(url.toString());
  const data = await response.json();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
};
