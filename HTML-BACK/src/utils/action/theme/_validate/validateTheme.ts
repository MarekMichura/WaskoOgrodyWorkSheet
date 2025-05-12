// import {z} from 'zod'

// import {EThemes, type EThemeValueTable} from '@/utils/type/EThemes'

// export const validateTheme = z.object({
//   theme: z.preprocess((val) => (typeof val === 'string' ? val.toUpperCase() : val), z.enum(Object.values(EThemes) as EThemeValueTable)),
// })

// export type IValidateTheme = z.infer<typeof validateTheme>
