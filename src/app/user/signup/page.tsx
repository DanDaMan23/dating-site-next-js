"use server"

import SignupForm from "./signup-form"

export default async function Page() {
  return (
    <main className='p-4'>
      <p className='text-2xl'>Signup</p>
      <SignupForm />
    </main>
  )
}
