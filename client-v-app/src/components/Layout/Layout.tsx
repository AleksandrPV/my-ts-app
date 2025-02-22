import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import styles from "./layout.module.scss";
import {ReactNode} from "react";
import { ThemeToggleButton } from '../ThemeToggleButton/ThemeToggleButton';
import {ThemeProvider, useTheme} from '../ThemeContext/ThemeContext.tsx';
import '../ThemeToggleButton/styles/light.scss';
import '../ThemeToggleButton/styles/dark.scss';
import {useEffect} from "react";

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useTheme();

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return <>{children}</>;
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <ThemeProvider>
                <ThemeWrapper>
                    <Header />
                    <main className={styles.main}>{children}</main>
                    <ThemeToggleButton />
                    <Footer />
                </ThemeWrapper>
            </ThemeProvider>
        </>
    )
}
