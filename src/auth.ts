// app/auth.ts
export async function signIn(method: string, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
  
    // Mock user data
    const users = [
      { name:"Saad", email: 'saad@email.com', password: 'saad123456' },
      { name:"Usman", email: 'usman@email.com', password: 'usman123456' },
      { name:"Saud", email: 'saud@email.com', password: 'saud123456' },
    ];
  
    const user = users.find(u => u.email === email && u.password === password);
  
    if (!user) {
      const error = new Error('Invalid credentials');
      (error as any).type = 'CredentialsSignin';
      throw error;
    }
  
    // Authentication successful
    return { email: user.email, name: user.name };
  }
  