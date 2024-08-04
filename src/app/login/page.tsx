'use client';

import { authenticate } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form className="flex flex-col gap-4 justify-center items-center" action={dispatch}>
      <h2 className="text-3xl font-semibold my-5">Login Form</h2>
      <input className="border-2 border-black p-1" type="email" name="email" placeholder="Email" required />
      <input className="border-2 border-black p-1" type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p> || <p>Success</p>}</div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pending) {
      event.preventDefault();
      console.log("Successful")
    }
  };

  return (
    <button className="bg-black text-white px-3 py-1 rounded-md"  aria-disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  );
}
