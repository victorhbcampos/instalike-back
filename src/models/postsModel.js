import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para buscar todos os posts de um banco de dados MongoDB
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instabyte"
    const db = conexao.db("imersao-instabyte");
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    // Seleciona o banco de dados "imersao-instabyte"
    const db = conexao.db("imersao-instabyte");
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}