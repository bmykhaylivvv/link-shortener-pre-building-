import { NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request) {
  // Define paths that should be allowed without updating the session.
  const whitelistPaths = ["/l/"];

  const { pathname } = request.nextUrl;

  // If the request path starts with any whitelisted path and not ends with /edit (private path for edit event), skip updateSession.
  if (
    whitelistPaths.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.next();
  }
  
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
