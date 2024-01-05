"use client"

import FormGrid, {
  FormFieldGroup,
  Input,
  InputGroup
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
            error={<p className='text-red-500'>Error Test</p>}
          />
        </FormFieldGroup>

        <FormFieldGroup>
          <label htmlFor='password'>Password:</label>
          <InputGroup
            input={<Input type='password' name='password' id='password' />}
            error={<p className='text-red-500'>Error Test</p>}
          />
        </FormFieldGroup>
      </FormGrid>
    </main>
  )
}
