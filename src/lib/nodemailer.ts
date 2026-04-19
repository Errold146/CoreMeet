import nodemailer from "nodemailer";

type TransportConfig = {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
};

const config = (): TransportConfig => {
    return {
        host: process.env.EMAIL_HOST!,
        port: +process.env.EMAIL_PORT!,
        secure: process.env.EMAIL_PORT === "465",
        auth: {
            user: process.env.EMAIL_USER!,
            pass: process.env.EMAIL_PASS!,
        },
    };
};

export const transporter = nodemailer.createTransport(config());
