import express from "express"; // Importa o framework Express para criar o servidor web
import multer from "multer"; // Importa o middleware Multer para lidar com uploads de arquivos

// Importa as funções necessárias do arquivo postsController.js
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Configura o armazenamento de arquivos no disco
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Define o diretório onde os arquivos serão salvos
        cb(null, 'uploads/'); // Modifique este caminho se necessário
    },
    filename: function (req, file, cb) {
        // Mantém o nome original do arquivo por simplicidade
        cb(null, file.originalname);
    },
});

// Cria uma instância do Multer com a configuração de armazenamento
const upload = multer({ storage });

// Define as rotas para a aplicação Express
const routes = (app) => {
    // Permite que a aplicação processe dados JSON enviados no corpo das requisições
    app.use(express.json());

    // Rota para recuperar todos os posts (requisição GET para /posts)
    app.get("/posts", listarPosts);

    // Rota para criar um novo post (requisição POST para /posts)
    app.post("/posts", postarNovoPost);

    // Rota para upload de imagem (requisição POST para /upload)
    // - Utiliza o middleware 'upload.single("imagem")' para lidar com um único arquivo chamado "imagem"
    // - Chama a função 'uploadImagem' do controlador após o upload bem-sucedido
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;