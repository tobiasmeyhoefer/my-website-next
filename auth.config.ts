import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("user = " + auth?.user?.name)
      const isLoggedIn = !!auth?.user;
      const isOnStartingPage = nextUrl.pathname.startsWith('/');
      console.log("IsONStartingPAge = " + nextUrl.pathname)
      if (isOnStartingPage) {
        console.log(isLoggedIn)
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;