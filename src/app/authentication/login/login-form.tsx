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
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const submitHandler = (data: FormData) => {
    loginHandler(data.email, data.password)
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='flex flex-col gap-7 p-5'
    >
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
        <label htmlFor='email'>{text.form.email.label}:</label>
        <input
          {...register("email")}
          type='email'
          className='rounded-md w-auto lg:w-10/12 text-black'
          placeholder={text.form.email.placeholder}
        />
      </div>

      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2'>
        <label htmlFor='password'>{text.form.password.label}:</label>
        <input
          {...register("password")}
          type='password'
          className='rounded-md w-auto lg:w-10/12 text-black'
          placeholder={text.form.password.placeholder}
        />
      </div>

      <div className='flex justify-end gap-2'>
        <button className='border-solid border-2 p-1 rounded-md'>
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
