import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const imagePath = ctx.params.image;

    // Redirect to the static directory
    const redirectURL = `/images/${imagePath}`;

    return new Response(null, {
      status: 307, // Temporary redirect
      headers: {
        "Location": redirectURL,
      },
    });
  },
};
