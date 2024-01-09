"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import text from "./text.json"
import { useRouter } from "next/navigation"
import FormGrid, {
  FormError,
  FormFieldGroup,
  Input,
  InputGroup
} from "@/components/form-grid/form-grid.component"

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

  const { replace } = useRouter()

  const submitHandler = async (data: FormData) => {
    const loginData = await loginHandler(data.email, data.password)

    sessionStorage.setItem("loginData", JSON.stringify(loginData))
    replace("/")
  }

  const resetFormHandler = () => reset()

  const formButtons = (
    <div className='flex flex-col lg:flex-row lg:justify-end gap-2'>
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
  )

  return (
    <FormGrid onSubmit={handleSubmit(submitHandler)} buttonsArea={formButtons}>
      <FormFieldGroup>
        <label htmlFor='email'>{text.form.email.label}:</label>
        <InputGroup
          input={
            <Input
              {...register("email")}
              type='email'
              className='rounded-md w-full text-black'
              placeholder={text.form.email.placeholder}
            />
          }
          error={
            errors.email && <FormError label={errors.email.message as string} />
          }
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='password'>{text.form.password.label}:</label>
        <InputGroup
          input={
            <Input
              {...register("password")}
              type='password'
              className='rounded-md w-full text-black'
              placeholder={text.form.password.placeholder}
            />
          }
          error={
            errors.password && (
              <FormError label={errors.password.message as string} />
            )
          }
        />
      </FormFieldGroup>
    </FormGrid>
  )
}
