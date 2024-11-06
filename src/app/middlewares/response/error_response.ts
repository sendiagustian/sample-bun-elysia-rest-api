import type { StatusMap } from "elysia";

export type ErrorResponse = {
    status?: number | keyof StatusMap;
    errors: string;
};
