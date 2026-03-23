import axios from 'axios'

// // cria uma instância do axios com a URL base da API de livros

const livrosAPI = axios.create({
    baseURL: "http://localhost:8000/livros"
})

async function getLivros(){
   const res = await livrosAPI.get('/')
    //data = dados da resposta, ou seja, os livros
   return res.data
}

export {
    getLivros
}