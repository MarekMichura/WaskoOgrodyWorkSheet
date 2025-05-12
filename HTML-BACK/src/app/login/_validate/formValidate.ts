import {z} from 'zod'

export const loginFormValidate = z.object({
  userName: z.string({required_error: 'errorFormat'}).min(5, 'errorInvalidLogin'),
  password: z.string({required_error: 'errorFormat'}).min(5, 'errorInvalidPassword'),
})

export type ILoginFormValidate = z.infer<typeof loginFormValidate>
