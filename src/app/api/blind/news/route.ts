export async function GET() {
  const API_KEY = process.env.GNEWS_API_KEY;

  if (!API_KEY) {
    return new Response("Missing GNEWS_API_KEY", { status: 500 });
  }

const res = await fetch(
  `https://gnews.io/api/v4/search?q=government OR election&country=in&lang=en&max=5&apikey=${API_KEY}`,
  { cache: "no-store" }
);


  const data = await res.json();

  return Response.json(data.articles);
}
