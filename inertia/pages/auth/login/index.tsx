import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@inertiajs/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ZeroFormField } from '~/components/form/zero-form-field'
import { ZeroForm } from '~/components/form/zero-form'
import { Button } from '~/components/ui/button'

const loginFormSchema = z.object({
  email: z.string().email({ message: 'Please add a valid email address.' }),
  password: z.string().min(1, { message: 'Please add a password.' }),
})

type LoginFormData = z.infer<typeof loginFormSchema>

const loginFormResolver = zodResolver(loginFormSchema)

const defaultLoginFormValues: LoginFormData = {
  email: '',
  password: '',
}

const loginFormFields: ZeroFormField[] = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
]

export default function LoginPage() {
  const loginForm = useForm({
    defaultValues: defaultLoginFormValues,
    resolver: loginFormResolver,
  })

  const onSubmit = (data: any) => {
    console.log('Form submitted', data)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <ZeroForm formFields={loginFormFields} form={loginForm} onSubmit={onSubmit}>
          <Button type="submit" className="w-full my-4">
            Login
          </Button>
        </ZeroForm>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
