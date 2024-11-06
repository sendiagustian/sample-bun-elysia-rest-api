import { t } from "elysia";

export type AuthLoginRequest = {
    email: string;
    password: string;
};

export const authRegisterDocRequest = {
    body: t.Object({ name: t.String(), email: t.String(), password: t.String(), phone: t.String() })
};

export const authLoginDocRequest = { body: t.Object({ email: t.String(), password: t.String() }) };

export type AuthRegisterRequest = {
    name: string;
    email: string;
    password: string;
    phone: string;
};

export type AuthTokenRequest = {
    token: string;
    userUid: string;
    status: "login" | "logout";
    expiredAt: Date;
};
