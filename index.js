// Importa o módulo Express
const express = require('express');
const dotenv = require('dotenv');

// Configurando a env
dotenv.config()

// Cria uma instância do Express
const app = express();

// Define a porta em que o servidor irá rodar
const porta = process.env.PORTA

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Array que armazenará os livros (em memória)
const livros = [];

/*
  Endpoint GET para recuperar todos os livros.
  Ao acessar a rota GET /livros, o servidor retorna o array de livros.
*/
app.get('/livros', (req, res) => {
  try {
    if(livros.length === 0){
      return res.status(200).json({msg: "Não há livros a serem exibidos!"})
}
  res.status(200).json(livros);
  } 
  catch (error) {
  res.status(500).json({msg: "Erro ao buscar livros!"})
  }

});

/*
  Endpoint POST para cadastrar um novo livro.
  Os dados devem incluir os campos obrigatórios:
  id, titulo, autor, anoPublicacao, genero e sinopse.
*/
app.post('/livros', (req, res) => {
  // Extrai os dados do corpo da requisição
  try{
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
}
catch(error){
  res.status(500).json
({error: "Erro ao cadastrar produtos!"})}
});


// Rota para editar o livro
// http://localhost:3000/livros/1
app.put('/livros:id', (req,res) =>{
  try {
    const id  = req.params.id
    const livros = livros.find(elemento => elemento.id === id)
    if(!livros){
      return res.status(404).json({error: "Livro não encontrado!"})
    }
    const { novoTitulo, novoAutor, novoAnoPublicacao, novoGenero, novaSinopse} = req.body;
    if(livros){
      livros.titulo = novoTitulo;
      livros.autor = novoAutor;
      livros.anoPublicacao = novoAnoPublicacao;
      livros.genero = novoGenero;
      livros.sinopse = novaSinopse;
      return livros
    }
    
    res.status(200).json(livros)
} catch (error) {
  return res.status(404).json({error: "Erro ao atualizar livros!"})

}
});


// Inicia o servidor
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}, acesse: http://localhost:${porta}`);
});
