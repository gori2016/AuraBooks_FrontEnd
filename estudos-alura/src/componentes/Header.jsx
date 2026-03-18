import styles from './Header.module.css'
import logo from '../imagens/logo.svg'
import perfil from '../imagens/perfil.svg'
import sacola from '../imagens/sacola.svg'
import { Link } from 'react-router-dom'



function Header() {
    const textoOpcoes = ["CATEGORIAS", "SOBRE NÓS", "FAVORITOS"]
    const iconesOpcoes = [perfil, sacola]
    return (
        <header className={styles.appHeader}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src={logo} alt='aoa' />
                <p><strong>Alura</strong>Books</p>
            </div>
            <ul className={styles.opcoes}>
                {textoOpcoes.map((texto) => (
                    <li key={texto} className={styles.opcao}>
                        <Link to="/favoritos">
                            <p>{texto}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className={styles.icones}>
                {iconesOpcoes.map((icone) => (
                    <li className={styles.icone}> <img src={icone} alt="" /></li>
                ))}
            </ul>
        </header>
    )
}

export default Header