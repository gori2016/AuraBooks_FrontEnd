import axios from 'axios'

// // cria uma instância do axios com a URL base da API de livros

const favoritosAPI = axios.create({
    baseURL: "http://localhost:8000/favoritos"
})

async function getFavoritos(){
   const res = await favoritosAPI.get('/')
    //data = dados da resposta, ou seja, os livros
   return res.data
}

async function deleteFavoritos(id){
   const res = await favoritosAPI.delete(`/${id}`)
    
}

async function postFavoritos(id){
   const res = await favoritosAPI.post(`/${id}`)
    
}


export {
    getFavoritos,
    deleteFavoritos,
    postFavoritos
}