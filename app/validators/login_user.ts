import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)

export type loginUserData = Infer<typeof loginUserValidator>
