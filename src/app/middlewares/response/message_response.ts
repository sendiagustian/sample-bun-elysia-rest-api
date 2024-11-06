import type { StatusMap } from "elysia";

export type MessageResponse = {
    status?: number | keyof StatusMap;
    message: string;
};
