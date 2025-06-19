import {z} from 'zod'

const stringNotArray = z.string().refine((val) => typeof val === 'string' || val === undefined)

export const validateLoginPageQuery = z.object({
  redirect: stringNotArray.optional(),
  error: stringNotArray.optional(),
  userName: stringNotArray.optional(),
})
