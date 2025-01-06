import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const createUserValidador = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().email(),
    password: vine.string(),
    password_confirmation: vine.string().sameAs('password'),
  })
)

export type createUserData = Infer<typeof createUserValidador>
