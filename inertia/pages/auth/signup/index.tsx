import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@inertiajs/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ZeroFormField } from '~/components/form/zero-form-field'
import { ZeroForm } from '~/components/form/zero-form'
import { Button } from '~/components/ui/button'

const signupFormSchema = z
  .object({
    name: z.string().min(1, { message: 'Name is required.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
    confirmPassword: z.string().min(6, { message: 'Please confirm your password.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  })

type SignupFormData = z.infer<typeof signupFormSchema>

const signupFormResolver = zodResolver(signupFormSchema)

const defaultSignupFormValues: SignupFormData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const signupFormFields: ZeroFormField[] = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'text',
  },
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
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Re-enter your password',
    type: 'password',
  },
]

export default function SignupPage() {
  const signupForm = useForm({
    defaultValues: defaultSignupFormValues,
    resolver: signupFormResolver,
  })

  const onSubmit = (data: any) => {
    console.log('Form submitted', data)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <ZeroForm formFields={signupFormFields} form={signupForm} onSubmit={onSubmit}>
          <Button type="submit" className="w-full my-4">
            Sign Up
          </Button>
        </ZeroForm>

        <p className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
