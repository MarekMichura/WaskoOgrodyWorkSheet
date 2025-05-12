import {z} from 'zod'

import {EMonthEN, EMonthPL} from '@/utils/type/EMonth'

export const workingHoursParamsValidate = z.object({
  year: z.coerce.number(),
  month: z.union([
    z
      .preprocess((val) => (typeof val === 'string' ? decodeURIComponent(val).toUpperCase() : val), z.enum(EMonthPL))
      .transform((val) => ({
        value: val,
        language: 'pl' as const,
        index: EMonthPL.indexOf(val),
      })),
    z
      .preprocess((val) => (typeof val === 'string' ? val.toUpperCase() : val), z.enum(EMonthEN))
      .transform((val) => ({
        value: val,
        language: 'en' as const,
        index: EMonthEN.indexOf(val),
      })),
  ]),
})

export type IWorkingHoursParamsValidate = z.infer<typeof workingHoursParamsValidate>
