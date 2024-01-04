import text from "./text.json"
import LoginForm from "./login-form"
import { login } from "./actions"

export default async function Page() {
  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='w-3/4 max-w-2xl'>
        <h2 className='pl-2 pb-2'>{text.title}</h2>
        <div className='border-solid border-2 p-2 rounded-md'>
          <LoginForm loginHandler={login} />
        </div>
      </div>
    </main>
  )
}
