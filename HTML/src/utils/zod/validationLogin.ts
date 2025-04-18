import {z} from 'zod'

export const validationLogin = z.object({
  userName: z.string({message: 'Nazwa użytkownika jest wymagana'}).min(5, 'Nazwa użytkownika musi mieć co najmniej pięć znaków'),
  password: z.string({message: 'Hasło jest wymagane'}).min(5, 'Hasło składa się z przynajmniej pięciu znaków'),
})

export type IPostLoginData = z.infer<typeof validationLogin>
