import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const homePageQSValidator = vine.compile(
  vine
    .object({
      day: vine.string(),
      year: vine.string(),
    })
    .optional()
)

export type homePageUrlData = Infer<typeof homePageQSValidator>
