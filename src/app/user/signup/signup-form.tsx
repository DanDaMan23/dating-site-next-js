"use client"

import { FormEvent } from "react"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import FormGrid, {
  Button,
  FormError,
  FormFieldGroup,
  Input,
  InputGroup,
  TextArea
} from "@/components/form-grid/form-grid.component"
import { yupResolver } from "@hookform/resolvers/yup"

export default function SignupForm() {
  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    bio: yup.string().required(),
    image: yup.mixed().required()
  })

  type FormData = yup.InferType<typeof schema>

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const submitHandler = async (data: FormData) => {
    console.log(data)
  }

  const resetFormHandler = () => reset()

  const formButtons = (
    <div className='flex flex-col lg:flex-row lg:justify-end gap-2'>
      <Button variant='secondary' onClick={resetFormHandler}>
        Reset
      </Button>
      <Button variant='primary'>Create Account</Button>
    </div>
  )

  return (
    <FormGrid onSubmit={handleSubmit(submitHandler)} buttonsArea={formButtons}>
      <FormFieldGroup>
        <label htmlFor='email'>Email:</label>
        <InputGroup
          input={<Input {...register("email")} type='email' />}
          error={
            errors.email && <FormError label={errors.email.message as string} />
          }
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='password'>Password:</label>
        <InputGroup
          input={<Input {...register("password")} type='password' />}
          error={
            errors.password && (
              <FormError label={errors.password.message as string} />
            )
          }
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='name'>Name:</label>
        <InputGroup
          input={<Input {...register("name")} type='text' />}
          error={
            errors.name && <FormError label={errors.name.message as string} />
          }
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='bio'>Bio:</label>
        <InputGroup
          input={<TextArea {...register("bio")} />}
          error={
            errors.bio && <FormError label={errors.bio.message as string} />
          }
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='image'>Profile Picture:</label>
        <InputGroup
          input={
            <Controller
              name='image'
              control={control}
              render={({ field }) => (
                <Input
                  type='file'
                  name='image'
                  id='image'
                  className='text-white'
                  onChange={(e) => {
                    field.onChange(e.target.files && e.target.files[0])
                  }}
                />
              )}
            />
          }
          error={
            errors.image && <FormError label={errors.image.message as string} />
          }
        />
      </FormFieldGroup>
    </FormGrid>
  )
}
