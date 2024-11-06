import swagger from "@elysiajs/swagger";

export const swaggerMiddleware = swagger({
    path: "/docs",
    documentation: {
        info: {
            title: "API Template Documentation",
            version: "1.0.0"
        }
    }
});
