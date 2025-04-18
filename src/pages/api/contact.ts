import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  // Handle the POST request
    return new Response(JSON.stringify({ message: "Hello from the API!" }), {
        headers: { "Content-Type": "application/json" },
    });
}