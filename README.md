# PyNodePredictor

# Projeto de Integração Flask e Node.js com Machine Learning

Este projeto demonstra a integração de Flask e Node.js para criar uma aplicação de machine learning simples. O Flask expõe uma API REST para previsões de machine learning, enquanto o Node.js consome essa API e exibe os resultados em um frontend.

## Estrutura do Projeto

- **`flask_server/`**
  - `app.py`: Servidor Flask que expõe a API de previsões.
  - `model.pkl`: Modelo de machine learning treinado.
  - `model.py`: Script para treinar e salvar o modelo.

- **`node_client/`**
  - `server.js`: Servidor Node.js que consome a API Flask e serve o frontend.
  - `package.json`: Configuração de pacotes do Node.js.
  - `package-lock.json`: Bloqueio de versões de dependências.
  - `public/`
    - `script.js`: JavaScript para interações no frontend.
    - `index.html`: HTML para a interface do usuário.

## Como Executar

### 1. Treinar e Servir o Modelo com Flask

1. Navegue até o diretório `flask_server`:

    ```sh
    cd flask_server
    ```

2. Execute o script para treinar e salvar o modelo:

    ```sh
    python model.py
    ```

3. Inicie o servidor Flask:

    ```sh
    python app.py
    ```

### 2. Consumir a API com Node.js

1. Navegue até o diretório `node_client`:

    ```sh
    cd node_client
    ```

2. Instale as dependências do Node.js:

    ```sh
    npm install
    ```

3. Inicie o servidor Node.js:

    ```sh
    node server.js
    ```

4. Abra o navegador e acesse:

    ```
    http://localhost:3000
    ```

   Você verá uma página onde pode digitar um número e obter a previsão.

## Observações

- Certifique-se de que o servidor Flask está rodando antes de iniciar o servidor Node.js.
- O servidor Node.js consome a API Flask que deve estar disponível em `http://localhost:5000`.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

