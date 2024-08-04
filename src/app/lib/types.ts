// app/lib/types.ts
export interface User {
    email: string;
    name: string;
  }
  
  export interface AuthResult {
    user?: User;
    error?: string;
  }
  