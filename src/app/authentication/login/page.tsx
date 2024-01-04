export default function Page() {
  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='w-3/4 max-w-2xl'>
        <h2 className='pl-2 pb-2'>Login</h2>
        <div className='border-solid border-2 p-2 rounded-md'>
          <form className='flex flex-col gap-7'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                name='email'
                id='email'
                className='rounded-md w-auto lg:w-10/12 text-black'
              />
            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                name='password'
                id='password'
                className='rounded-md w-auto lg:w-10/12 text-black'
              />
            </div>

            <div className='flex justify-end gap-2'>
              <button className='border-solid border-2 p-1 rounded-md'>
                Clear
              </button>
              <button
                type='submit'
                className='border-solid border-2 border-black p-1 rounded-md bg-white text-black '
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
