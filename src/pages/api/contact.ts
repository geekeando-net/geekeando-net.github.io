import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse the form data from the request
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate the form data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide name, email, and message.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Here you would typically send the data to a service or database
    // For now, we'll just log it and return a success response
    console.log("Contact form submission:", { name, email, message });

    // Return a success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Your message has been sent successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while processing your request.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
