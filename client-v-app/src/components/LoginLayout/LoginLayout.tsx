import styles from "./layout.module.scss";
import {ReactNode} from "react";


export default function LoginLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <main className={styles.main}>{children}</main>
        </div>
    )
}
