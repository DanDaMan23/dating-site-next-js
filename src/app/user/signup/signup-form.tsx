"use client"

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
import text from "./text.json"
import { signupBody } from "./actions"
import { useRouter } from "next/navigation"

interface SignupFormProps {
  signupHandler: (body: signupBody) => void
}

export default function SignupForm({ signupHandler }: SignupFormProps) {
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

  const { replace } = useRouter()

  const submitHandler = async (data: FormData) => {
    replace("/authentication/login")
    console.log(data)
  }

  const resetFormHandler = () => reset()

  const formButtons = (
    <div className='flex flex-col lg:flex-row lg:justify-end gap-2'>
      <Button variant='secondary' onClick={resetFormHandler}>
        {text.form.buttons.secondary}
      </Button>
      <Button type='submit' variant='primary'>
        {text.form.buttons.primary}
      </Button>
    </div>
  )

  return (
    <FormGrid onSubmit={handleSubmit(submitHandler)} buttonsArea={formButtons}>
      <FormFieldGroup>
        <label htmlFor='email'>{text.form.fields.email.label}:</label>
        <InputGroup
          input={
            <Input
              {...register("email")}
              type='email'
              placeholder={text.form.fields.email.placeholder}
            />
          }
          error={
            errors.email && <FormError label={errors.email.message as string} />
          }
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='password'>{text.form.fields.password.label}:</label>
        <InputGroup
          input={
            <Input
              {...register("password")}
              type='password'
              placeholder={text.form.fields.password.placeholder}
            />
          }
          error={
            errors.password && (
              <FormError label={errors.password.message as string} />
            )
          }
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='name'>{text.form.fields.name.label}:</label>
        <InputGroup
          input={
            <Input
              {...register("name")}
              type='text'
              placeholder={text.form.fields.name.placeholder}
            />
          }
          error={
            errors.name && <FormError label={errors.name.message as string} />
          }
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='bio'>{text.form.fields.bio.label}:</label>
        <InputGroup
          input={
            <TextArea
              {...register("bio")}
              placeholder={text.form.fields.bio.placeholder}
            />
          }
          error={
            errors.bio && <FormError label={errors.bio.message as string} />
          }
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='image'>{text.form.fields.image.label}:</label>
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
