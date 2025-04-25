import {z} from 'zod'

import {months, monthsEnglish} from '@/utils/type/common/EDate'

export const validationYearMonth = z.object({
  year: z.number(),
  month: z.union([
    z
      .preprocess((val) => (typeof val === 'string' ? decodeURIComponent(val).toUpperCase() : val), z.enum(months))
      .transform((val) => ({
        value: val,
        language: 'pl' as const,
        index: months.indexOf(val),
      })),
    z
      .preprocess((val) => (typeof val === 'string' ? val.toUpperCase() : val), z.enum(monthsEnglish))
      .transform((val) => ({
        value: val,
        language: 'en' as const,
        index: monthsEnglish.indexOf(val),
      })),
  ]),
})

export type IValidationYearMonth = z.infer<typeof validationYearMonth>
