import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

// Proxy: gestiona les redireccions de locale automàticament
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};