import Elysia, { t, type Context } from "elysia";
import { swaggerMiddleware } from "../app/middlewares/swagger_middleware";
import { AuthController } from "../controllers/auth_controller";
import { authLoginDocRequest, authRegisterDocRequest } from "../data/requests/auth_request";

const web = new Elysia()
    .use(swaggerMiddleware)
    .post("/auth/login", (context: Context) => AuthController.login(context), authLoginDocRequest)
    .post("/auth/register", (context) => AuthController.register(context), authRegisterDocRequest);

export default web;
