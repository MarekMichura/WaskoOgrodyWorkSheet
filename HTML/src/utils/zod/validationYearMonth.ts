import {z} from 'zod'

import {months, monthsEnglish} from '../type/common/EDate'

export function validationYearMonth(startDate: Date, endDate: Date) {
  const yearMax = endDate.getFullYear()
  const monthMax = endDate.getMonth()
  const yearMin = startDate.getFullYear()
  const monthMin = startDate.getMonth()

  return z
    .object({
      year: z.preprocess((val) => (typeof val === 'string' ? Number(val) : val), z.number().min(yearMin).max(yearMax)),
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
    .refine((data) => !(data.year === yearMin && data.month.index < monthMin), {
      message: `Too early ${yearMin}-${months[monthMin]}`,
      path: ['year'],
    })
    .refine((data) => !(data.year === yearMax && data.month.index > monthMax), {
      message: `Too late ${yearMax}-${months[monthMax]}`,
      path: ['year'],
    })
}

export type IValidationYearMonth = z.infer<ReturnType<typeof validationYearMonth>>
