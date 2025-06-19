import {z} from 'zod'

export const loginFormValidate = z.object({
  userName: z.string({required_error: 'errorInvalidLogin'}).min(5, {message: 'errorInvalidLogin'}),
  password: z.string({required_error: 'errorInvalidPassword'}).min(5, {message: 'errorInvalidPassword'}),
})

export type ILoginFormValidate = z.infer<typeof loginFormValidate>
