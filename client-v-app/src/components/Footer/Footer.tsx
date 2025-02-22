import Menu from "../Menu/Menu.tsx";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Menu />
        </footer>
    )
}