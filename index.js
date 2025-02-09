// Importa o módulo Express
const express = require('express');

// Cria uma instância do Express
const app = express();

// Define a porta em que o servidor irá rodar
const PORT = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Array que armazenará os livros (em memória)
let livros = [];

/*
  Endpoint GET para recuperar todos os livros.
  Ao acessar a rota GET /livros, o servidor retorna o array de livros.
*/
app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

/*
  Endpoint POST para cadastrar um novo livro.
  Os dados devem incluir os campos obrigatórios:
  id, titulo, autor, anoPublicacao, genero e sinopse.
*/
app.post('/livros', (req, res) => {
  // Extrai os dados do corpo da requisição
  const { id, titulo, autor, anoPublicacao, genero, sinopse } = req.body;

  // Validação para verificar se todos os campos obrigatórios foram enviados
  if (!id || !titulo || !autor || !anoPublicacao || !genero || !sinopse) {
    return res.status(400).json({
      error: 'Dados incompletos! Os campos id, titulo, autor, anoPublicacao, genero e sinopse são obrigatórios.'
    });
  }

  // Cria o objeto livro
  const novoLivro = { id, titulo, autor, anoPublicacao, genero, sinopse };

  // Adiciona o livro ao array
  livros.push(novoLivro);

  // Retorna o livro cadastrado com status 201 (Created)
  return res.status(201).json(novoLivro);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}, acesse: http://localhost:${PORT}`);
});
