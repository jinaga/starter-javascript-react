import path from "path";

export function configureRoutes(app) {
    app.get("/", (req, res, next) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, "views/index.html"));
    });

    app.get("/scripts/main.js", (req, res, next) => {
        res.sendFile(path.join(__dirname, "scripts/main.js"));
    });
}