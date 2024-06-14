import styles from './styles.module.css'

interface HeaderProps {
    titulo: string;
}

function Header({titulo}): HeaderProps {
    return <header className={styles.header}>titulo</header>
}