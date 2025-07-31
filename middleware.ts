import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  // No publicRoutes option available in this version, so handle public routes manually if needed
});

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
