import { useEffect, useState } from 'react'
import '../App.css'
import styled from 'styled-components'
import { deleteFavoritos, getFavoritos,  } from '../servicos/Favoritos'
import styles from './Favoritos.module.css'
import img from '../imagens/livro.png'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos()
    setFavoritos(favoritosDaApi)
  } 

    async function deletarFavoritos(id) {
    await deleteFavoritos(id)
    await fetchFavoritos()
    alert(`Livro de ID: ${id} Deletado!`)
  } 



  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer >
      <div className={styles.containerFavoritos}>
        <h1 className={styles.tituloFavoritos}>Aqui fica o seus livros favoritos vindo da API</h1>
        <h2 className={styles.tituloFavoritos2}>Clique em algum livro para Deletar da tela de favoritos</h2>
      </div>
      
      {favoritos.map(favorito => (
        <div onClick={() => deletarFavoritos(favorito.id)} className={styles.containerResultados}>
          <img src={img} alt="" />
           <p className={styles.nomeFavoritos} key={favorito.id}>{favorito.nome}</p>
        </div>
       
      ))}
    </AppContainer>
  )
}

export default Favoritos