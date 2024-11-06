import type { ErrorResponse } from "./response/error_response";
import { isExpiredAuthToken } from "../../data/models/token_model";
import { AuthService } from "../../services/atuh_service";
import type { Context } from "elysia";

export const authMiddleware = async (context: Context): Promise<ErrorResponse | undefined> => {
    const token = context.request.headers.get("X-API-TOKEN");

    if (token) {
        const validToken = await AuthService.findToken(token);

        if (validToken) {
            const tokenActive: boolean =
                validToken?.expiredAt !== null ? !isExpiredAuthToken(validToken?.expiredAt) : true;

            if (tokenActive) {
                return;
            } else {
                const message: string = "Token expired";
                const response: ErrorResponse = {
                    status: 401,
                    errors: message
                };

                return response;
            }
        } else {
            const message: string = "Incorrect authentication";
            const response: ErrorResponse = {
                status: 401,
                errors: message
            };

            return response;
        }
    } else {
        const message: string = "Unauthorized";
        const response: ErrorResponse = {
            status: 401,
            errors: message
        };

        return response;
    }
};
