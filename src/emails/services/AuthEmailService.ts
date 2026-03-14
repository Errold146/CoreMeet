import { EmailService } from "./EmailService";
import { emailConfig } from "../config/config";
import { PasswordResetEmailData, VerificationEmailData } from "../types/email.types";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationEmail";
import { renderPasswordResetEmail, renderPasswordResetEmailText } from "../templates/PasswordResetEmail";

export class AuthEmailService {
    static async sendVerificationEmail(data: VerificationEmailData): Promise<void> {
        await EmailService.send({
            from: emailConfig.from.verification,
            to: data.email,
            subject: 'Confirma tu cuenta en CoreMeet',
            text: renderVerificationEmailText(data),
            html: renderVerificationEmail(data),
        })
    }

    static async sendPasswordResetToken(data: PasswordResetEmailData): Promise<void> {
        await EmailService.send({
            from: emailConfig.from.passwordReset,
            to: data.email,
            subject: 'Resstablece tu password en CoreMeet',
            text: renderPasswordResetEmailText(data),
            html: renderPasswordResetEmail(data)
        })
    }
}
