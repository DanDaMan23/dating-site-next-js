export default function Page() {
  return (
    <main className='p-4'>
      <p className='text-2xl'>Signup</p>
      {/* Signup Form */}
      <form className='grid gap-7 p-5'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
          <label htmlFor='email'>Email:</label>
          <div className='grid gap-2 col-span-2'>
            <input
              type='email'
              name='email'
              id='email'
              className='rounded-md text-black'
            />
            <p className='text-red-500'>Error Test</p>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
          <label htmlFor='password'>Password:</label>
          <div className='grid gap-2 col-span-2'>
            <input
              type='password'
              name='password'
              id='password'
              className='rounded-md text-black'
            />
            <p className='text-red-500'>Error Test</p>
          </div>
        </div>
      </form>
    </main>
  )
}
