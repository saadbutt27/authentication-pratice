'use server'
 
import { signIn } from '@/auth'

interface CustomError extends Error {
  type?: string;
}
 
export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    await signIn('credentials', formData)
    console.log("Success")
  } catch (error) {
    const customError = error as CustomError;
      if (customError) {
        switch (customError.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.'
          default:
            return 'Something went wrong.'
        }
    }
    throw customError
  }
}