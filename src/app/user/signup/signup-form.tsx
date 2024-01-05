"use client"

import { FormEvent } from "react"
import FormGrid, {
  Button,
  FormError,
  FormFieldGroup,
  Input,
  InputGroup,
  TextArea
} from "@/components/form-grid/form-grid.component"

export default function SignupForm() {
  const formButtons = (
    <div className='flex flex-col lg:flex-row lg:justify-end gap-2'>
      <Button variant='secondary'>Reset</Button>
      <Button variant='primary'>Create Account</Button>
    </div>
  )

  return (
    <FormGrid
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
      }}
      buttonsArea={formButtons}
    >
      <FormFieldGroup>
        <label htmlFor='email'>Email:</label>
        <InputGroup
          input={<Input type='email' name='email' id='email' />}
          error={<FormError label='Error Test' />}
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='password'>Password:</label>
        <InputGroup
          input={<Input type='password' name='password' id='password' />}
          error={<FormError label='Error Test' />}
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='name'>Name:</label>
        <InputGroup
          input={<Input type='text' name='name' id='name' />}
          error={<FormError label='Error Test' />}
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='bio'>Bio:</label>
        <InputGroup
          input={<TextArea name='bio' id='bio' />}
          error={<FormError label='Error Test' />}
        />
      </FormFieldGroup>

      <FormFieldGroup>
        <label htmlFor='image'>Profile Picture:</label>
        <InputGroup
          input={
            <Input
              type='file'
              name='name'
              id='name'
              className='text-white'
              onChange={(e) => {
                console.log(e.target.value)
              }}
            />
          }
          error={<FormError label='Error Test' />}
        />
      </FormFieldGroup>
    </FormGrid>
  )
}
