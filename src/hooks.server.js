import { redirect } from "@sveltejs/kit";
import PocketBase from 'pocketbase'
import { POJos } from '$lib/components/utlis'


/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  event.locals.pb = new PocketBase('http://127.0.0.1:8090')
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

  const access = event.cookies.get("access") === "true";
  if (!access && event.route.id?.startsWith("/admin")) {
    throw redirect(302, "/login");
  }

  const response = await resolve(event);

  // response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({secure: false}))

  return response;
};