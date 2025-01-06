import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const addThoughtValidator = vine.compile(
  vine.object({
    thought: vine.string(),
  })
)

export type addThoughtData = Infer<typeof addThoughtValidator>
