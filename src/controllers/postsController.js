import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função para buscar todos os posts
    const resultado = await getTodosPosts()
    // Envia uma resposta HTTP com status 200 (OK) e os dados dos posts no formato JSON
    res.status(200).json(resultado);
}