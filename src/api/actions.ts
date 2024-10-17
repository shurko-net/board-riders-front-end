import { loginSchema, registerSchema } from '@/utils/validation/formSchemas'
import { parseWithZod } from '@conform-to/zod'

export async function LoginUser(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: loginSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  // return redirect('/')
}

export async function RegisterUser(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: registerSchema
  })
  if (submission.status !== 'success') {
    return submission.reply()
  }

  // return redirect('/')
}
