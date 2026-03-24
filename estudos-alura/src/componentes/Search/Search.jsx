import styles from './Search.module.css'
import { useEffect, useState } from 'react'
import { getLivros } from '../../servicos/Livros'
import img from '../../imagens/livro.png'
import { postFavoritos } from '../../servicos/Favoritos'

function Search() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosApi = await getLivros()
        console.log("O que veio da API:", livrosApi)
        // Garante que livros sempre seja um array, mesmo se a API falhar
        setLivros(livrosApi || [])
    }

    async function insertFavoritos(id) {
        await postFavoritos(id)
        alert(`Livro de id:  ${id} inserido!`)
    }


    return (
        <div className={styles.div}>
            <h2 className={styles.titulo}>Já sabe por onde começar?</h2>
            <h3 className={styles.subtitulo}>Encontre seu livro em nossa estante</h3>

            <input
                type="text"
                placeholder="Escreva sua próxima leitura"
                onBlur={(evento) => {
                    const textoDigitado = evento.target.value
                    // O ?. garante que não quebre se o nome for nulo
                    const resultadoPesquisa = livros.filter(livro =>
                        livro.nome?.toLowerCase().includes(textoDigitado.toLowerCase())
                    )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />

            {livrosPesquisados.map(livro => (
                /* ADICIONADO: key={livro.id} para o React não reclamar */
                <div onClick={() => insertFavoritos(livro.id)} key={livro.id || livro.nome} className={styles.divResultadoPesquisa}>
                    <p className={styles.paragrafoResultado}>{livro.nome}</p>
                    <img className={styles.img} src={img} alt={livro.nome} />
                </div>
            ))}
        </div>
    )
}

export default Search