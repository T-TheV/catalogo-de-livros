# Catálogo de Livros

Este projeto é uma API para gerenciar um catálogo de livros.

## Instruções

### Requisitos

- Node.js
- npm

### Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/catalogo-de-livros.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd catalogo-de-livros
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

### Executando a API

Para iniciar a API, execute o seguinte comando:
```sh
node index.js
```

A API estará disponível em `http://localhost:3000`.

### Testando a API

Para testar a API, você pode usar o arquivo `.http` incluído no projeto. Este arquivo contém exemplos de requisições HTTP que podem ser executadas diretamente no VS Code com a extensão "REST Client".

#### Exemplo de Requisição

```http
### Listar todos os livros
GET http://localhost:3000/livros

### Adicionar um novo livro
POST http://localhost:3000/livros
Content-Type: application/json

{
  "titulo": "Novo Livro",
  "autor": "Autor Desconhecido",
  "ano": 2023
}
```

Para executar uma requisição, basta clicar no botão "Send Request" que aparece acima da linha da requisição no VS Code.

### Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.