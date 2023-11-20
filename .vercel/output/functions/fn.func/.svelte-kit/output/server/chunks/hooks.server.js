import { r as redirect } from "./index.js";
const handle = async ({ event, resolve }) => {
  if (event.route.id?.startsWith("/login") || event.route.id?.startsWith("/register")) {
    throw redirect(302, "/");
  }
  const theme = event.cookies.get("siteTheme");
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
  });
  return response;
};
export {
  handle
};
