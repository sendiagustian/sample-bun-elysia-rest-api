import type { Context } from "elysia";
import type { DataResponse } from "../app/middlewares/response/data_response";
import type { AuthView } from "../data/models/views/auth_view";
import type { AuthLoginRequest, AuthRegisterRequest } from "../data/requests/auth_request";
import { erroHandle } from "../app/utils/error";
import { AuthService } from "../services/atuh_service";

export class AuthController {
    static login = async (context: Context) => {
        const reqBody: AuthLoginRequest = context.body as AuthLoginRequest;
        try {
            const data = await AuthService.login(reqBody);
            const response: DataResponse<AuthView> = {
                status: context.set.status,
                data: data
            };

            return response;
        } catch (error) {
            return erroHandle(error);
        }
    };

    static register = async (context: Context) => {
        const reqBody: AuthRegisterRequest = context.body as AuthRegisterRequest;

        try {
            const data = await AuthService.register(reqBody);
            const response: DataResponse<string> = {
                status: context.set.status,
                data: data
            };

            return response;
        } catch (error) {
            return erroHandle(error);
        }
    };
}
