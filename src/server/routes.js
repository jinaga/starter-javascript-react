import express from "express";
import path from "path";

export function configureRoutes(app) {
    app.get("/", (req, res, next) => {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, "views/index.html"));
    });

    app.use("/scripts", express.static(path.join(__dirname, "scripts")));
}