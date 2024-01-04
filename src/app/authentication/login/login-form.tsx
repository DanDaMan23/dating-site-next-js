"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import text from "./text.json"

interface LoginFormProps {
  loginHandler: (email: string, password: string) => void
}

export default function LoginForm({ loginHandler }: LoginFormProps) {
  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()
  })
  type FormData = yup.InferType<typeof schema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const submitHandler = (data: FormData) => {
    loginHandler(data.email, data.password)
  }

  const resetFormHandler = () => reset()

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='flex flex-col gap-7 p-5'
    >
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
        <label htmlFor='email'>{text.form.email.label}:</label>
        <div className='flex flex-col gap-2 w-auto lg:w-10/12'>
          <input
            {...register("email")}
            type='email'
            className='rounded-md w-full text-black'
            placeholder={text.form.email.placeholder}
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
        <label htmlFor='password'>{text.form.password.label}:</label>
        <div className='flex flex-col gap-2 w-auto lg:w-10/12'>
          <input
            {...register("password")}
            type='password'
            className='rounded-md w-full text-black'
            placeholder={text.form.password.placeholder}
          />
          {errors.password && (
            <p className='text-red-500'>{errors.password.message}</p>
          )}
        </div>
      </div>

      <div className='flex justify-end gap-2'>
        <button
          className='border-solid border-2 p-1 rounded-md'
          onClick={resetFormHandler}
        >
          {text.form.buttons.reset}
        </button>
        <button
          type='submit'
          className='border-solid border-2 border-black p-1 rounded-md bg-white text-black '
        >
          {text.form.buttons.submit}
        </button>
      </div>
    </form>
  )
}
