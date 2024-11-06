import web from "./routers/router";

const port = process.env.PORT || 8000;

web.listen(port, () => {
    console.log(`🦊 Service is running at http://${web.server?.hostname}:${web.server?.port}`);
});
