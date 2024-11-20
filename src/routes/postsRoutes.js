import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Permite que o Express entenda requisições com corpo no formato JSON
    app.use(express.json());
    // Rota GET para a URL /posts
    app.get("/posts", listarPosts);
}

export default routes;