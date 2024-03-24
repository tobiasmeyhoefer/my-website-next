"use server"

import { signIn, signOut} from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
// import { signOut } from 'next-auth/react';
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData, {callbackUrl: "/"});
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}