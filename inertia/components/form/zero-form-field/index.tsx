import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import type { Control, FieldValues } from 'react-hook-form'
import { Input } from '~/components/ui/input'
import { cloneElement } from 'react'
import { cn } from '~/lib/utils'

type InputTypes =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'date'
  | 'checkbox'
  | 'radio'

type ClassNamesForField = {
  item?: string
  label?: string
  description?: string
  input?: string
  error?: string
}
export type ZeroFormField = {
  name: string
  label: string
  placeholder: string
  description?: string
  children?: React.ReactNode
  type: InputTypes
  colSpan?: number

  classNames?: ClassNamesForField
}

type Props = {
  control: Control<FieldValues>
} & ZeroFormField

export const ZeroFormField = (props: Props) => {
  const { control, name, description, placeholder, type, colSpan, classNames } = props

  return (
    <DummyFormField
      control={control}
      name={name}
      label={props.label}
      description={description}
      colSpan={colSpan}
      classNames={classNames}
    >
      <Input placeholder={placeholder} type={type} />
    </DummyFormField>
  )
}

type DummyProps = {
  children: React.ReactElement
  control: Control<FieldValues, string>
  name: string
  label: string
  description?: string
  colSpan?: number
  classNames?: ClassNamesForField
}

const defaultClassNames: ClassNamesForField = {
  item: '',
  description: '',
  input: '',
  label: '',
  error: '',
}

const DummyFormField = (props: DummyProps) => {
  const {
    control,
    name,
    description = null,
    children,
    colSpan = 12,
    classNames = defaultClassNames,
  } = props

  const colSpanClass = `col-span-${colSpan}`

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(classNames.item, colSpanClass)}>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>{cloneElement(children, { ...field })}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
