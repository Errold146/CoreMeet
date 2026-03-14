export const emailConfig = {
    from: {
        verification: "CoreMeet <cuentas@coremeet.com>",
        passwordReset: "CoreMeet <admin@coremeet.com>",
        default: "CoreMeet <noreply@coremeet.com>",
    },
    tokenExpiration: "1 hora",
} as const;
