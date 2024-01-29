'use server'

import * as z from 'zod'
// use bcryptjs instead of bcrypt in case error when using bcrypt
import bcrypt from 'bcryptjs'

import { RegisterSchema } from '@/schemas'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { email, password, name } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    /*  */
    return { error: 'Email already in user!' }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  // TODO: Send verification token email

  return { success: 'Email sent!' }
  // console.log(values)
}
