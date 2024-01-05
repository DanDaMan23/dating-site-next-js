"use client"

import FormGrid, {
  Button,
  FormError,
  FormFieldGroup,
  Input,
  InputGroup,
  TextArea
} from "@/components/form-grid/form-grid.component"

export default function Page() {
  return (
    <main className='p-4'>
      <p className='text-2xl'>Signup</p>
      {/* Signup Form */}
      <FormGrid
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
        }}
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

        <div className='flex justify-end gap-2'>
          <Button variant='secondary'>Reset</Button>
          <Button variant='primary'>Create Account</Button>
        </div>
      </FormGrid>
    </main>
  )
}
