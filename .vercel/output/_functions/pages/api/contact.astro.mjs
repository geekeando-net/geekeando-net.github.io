export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide name, email, and message."
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    console.log("Contact form submission:", { name, email, message });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Your message has been sent successfully!"
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while processing your request."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
