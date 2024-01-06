"use server"

import { signup } from "./actions"
import SignupForm from "./signup-form"
import text from "./text.json"

export default async function Page() {
  return (
    <main className='p-4'>
      <p className='text-2xl'>{text.title}</p>
      <SignupForm signupHandler={signup} />
    </main>
  )
}
