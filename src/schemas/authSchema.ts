import { z } from "zod"

export type authData = z.infer<typeof authSchema>

export const authSchema = z.object({
  login: z.string().min(3, "Логин должен быть минимум 3 символа"),
  password: z.string().min(4, "Пароль должен быть минимум 8 символов")
})
