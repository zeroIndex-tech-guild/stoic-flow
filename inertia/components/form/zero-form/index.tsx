import { Form } from '~/components/ui/form'
import type { UseFormReturn, FieldValues, SubmitHandler } from 'react-hook-form'
import { ZeroFormField } from '../zero-form-field'

type Props = {
  form: UseFormReturn<any>
  onSubmit: SubmitHandler<FieldValues>
  children?: React.ReactNode
  formFields: ZeroFormField[]
}

export const ZeroForm = (props: Props) => {
  const { form, onSubmit, formFields = [] } = props

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12">
          {formFields.map((field) => (
            <ZeroFormField control={form.control} key={field.name} {...field} />
          ))}
        </div>
        <footer>{props.children}</footer>
      </form>
    </Form>
  )
}
