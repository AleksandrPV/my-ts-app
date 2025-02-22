import {v4 as uuid} from 'uuid';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
    const MENU = [
        {title: "Главная", to: "/", key: uuid()},
        {title: "Портфолио", to: "/portfolio", key: uuid()},
        {title: "Блог", to: "/blog", key: uuid()},
        {title: "Контакты", to: "/contact", key: uuid()},
    ]
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {MENU.map(({title, to, key}) => (<Link className={styles.a} key={key} to={to}>{title}</Link>))}
            </ul>
        </nav>
    )
}