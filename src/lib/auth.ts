import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "../db";
import * as schema from "../db/schema";
import { AuthEmailService } from "../emails";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg',
        usePlural: true,
        schema
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async ({user, url}) => {
            const {name, email} = user
            await AuthEmailService.sendPasswordResetToken({email, name, url})
        }
    },
    emailVerification: {
        sendOnSignIn: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({user, url}) => {
            const { name, email } = user
            await AuthEmailService.sendVerificationEmail({ name, email, url })
        }
    },
    baseURL: process.env.BETTER_AUTH_URL,
    secret: process.env.BETTER_AUTH_SECRET,
    user: {
        additionalFields: {
            bio: {
                type: 'string',
                required: false
            }
        }
    },
    plugins: [nextCookies()]
})

export type Session = typeof auth.$Infer.Session.session;
