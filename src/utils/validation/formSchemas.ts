import { z } from 'zod'
// const phoneSchema = z
//   .string({ required_error: 'Заполните поле' })
//   .regex(/^\+?[1-9]\d{1,14}$/, {
//     message: 'Неверный формат номера телефона'
//   })
const emailSchema = z.string({ required_error: 'Заполните поле' }).email({
  message: 'Неверный формат почты'
})
export const loginSchema = z.object({
  email: emailSchema,
  password: z
    .string({ required_error: 'Заполните поле' })
    .min(8, { message: 'Строка должна содержать не менее 8 символов.' })
    .max(28, { message: 'Строка должна содержать не более 28 символов.' })
})

export const registerSchema = z.object({
  name: z
    .string({ required_error: 'Заполните поле' })
    .min(1, { message: 'Строка должна содержать не менее 1 символа.' })
    .max(20, { message: 'Строка должна содержать не более 20 символов.' }),
  email: emailSchema,
  password: z
    .string({ required_error: 'Заполните поле' })
    .min(8, { message: 'Строка должна содержать не менее 8 символов.' })
    .max(28, { message: 'Строка должна содержать не более 28 символов.' }),
  // phone: phoneSchema,
  agreement: z
    .boolean({ required_error: 'Вы должны согласиться с правилами' })
    .refine(val => val === true)
})
