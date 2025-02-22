import {v4 as uuid} from 'uuid';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.css';

export default function BurgerMenu() {
    const MENU = [
        {title: "Блог", to: "/blog", key: uuid()},
    ]
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {MENU.map(({title, to, key}) => (<Link key={key} to={to}>{title}</Link>))}
            </ul>
        </nav>
    )
}