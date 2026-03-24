📚 AuraBooks - FrontEnd
Aplicação frontend desenvolvida para estudos práticos na Alura, consumindo uma API REST local de livros com funcionalidades de busca e favoritos.

🚀 Tecnologias utilizadas

React — biblioteca principal para construção da interface
Vite — bundler e servidor de desenvolvimento
React Router DOM — navegação entre páginas
Axios — requisições HTTP para a API
Styled Components — estilização com CSS-in-JS
CSS Modules — estilização com escopo local por componente


✨ Funcionalidades

🔍 Busca de livros — pesquise por título na estante
⭐ Favoritos — adicione livros à sua lista de favoritos
🗑️ Remover favoritos — remova livros da lista de favoritos
📖 Últimos lançamentos — visualize os livros mais recentes


📁 Estrutura do projeto
estudos-alura/
├── src/
│   ├── componentes/
│   │   ├── Header/
│   │   ├── Search/
│   │   └── UltimosLancamentos/
│   ├── rotas/
│   │   ├── Home.jsx
│   │   └── Favoritos.jsx
│   ├── servicos/
│   │   ├── Livros.js
│   │   └── Favoritos.js
│   ├── imagens/
│   ├── App.jsx
│   └── main.jsx

⚙️ Como rodar o projeto
Pré-requisitos

Node.js instalado
API backend rodando em http://localhost:8000

Instalação
bash# Clone o repositório
git clone https://github.com/gori2016/AuraBooks_FrontEnd.git

# Entre na pasta do projeto
cd AuraBooks_FrontEnd/estudos-alura

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
A aplicação estará disponível em http://localhost:5173.

🔗 Backend
Este projeto depende de uma API REST local. Certifique-se de que o backend está rodando na porta 8000 com as seguintes rotas:
MétodoRotaDescriçãoGET/livrosLista todos os livrosGET/favoritosLista os favoritosPOST/favoritos/:idAdiciona um livro aos favoritosDELETE/favoritos/:idRemove um livro dos favoritos

📝 Licença
Projeto desenvolvido para fins de estudo na Alura.
