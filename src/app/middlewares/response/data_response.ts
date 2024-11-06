import type { StatusMap } from "elysia";

export type DataResponse<T> = {
    status?: number | keyof StatusMap;
    data: T;
};
