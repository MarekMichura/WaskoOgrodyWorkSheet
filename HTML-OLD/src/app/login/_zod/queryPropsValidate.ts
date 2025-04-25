import {z} from 'zod'

const stringNotArray = z.any().refine((val) => typeof val === 'string' || val === undefined)

export const validateLoginPageQuery = z.object({
  redirect: stringNotArray.default('/profil'),
  error: stringNotArray.optional(),
  userName: stringNotArray.optional(),
})
