import {ZodError} from 'zod'

export function convertZodErrors(error: ZodError) {
  return error.issues.reduce((acc: {[key: string]: string}, issue) => {
    acc[issue.path[0]] = issue.message
    return acc
  }, {})
}
