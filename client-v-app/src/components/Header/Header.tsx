

import {useState} from "react";
import styles from "./Header.module.scss";
import useResize from "../../hooks/useResize.tsx";
import Menu from "../Menu/Menu.tsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import Box from '@mui/material/Box';
import {Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import { Link } from 'react-router-dom';

export default function Header() {
    const [isFormVisible, setFormVisible] = useState(false);

    function toggleFormVisibility() {
        setFormVisible(!isFormVisible);
    }

    const width = useResize();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Logo</div>
            { width > 800 && <Menu  /> }
            { width <= 800 && <BurgerMenu /> }
            <div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent:"end" }}>
                    <Link to={"/Login"} style={{ padding: "0", }}>
                        <Button sx={{
                            color: "#ddd",
                            fontSize: ".93rem",
                            padding: ".3rem",
                            alignItems: "center",
                        }}>Войти</Button>
                    </Link>
                    <Link to={"/Registration"} style={{ padding: "0", }}>
                        <Button sx={{
                            color: "#ddd",
                            border: "1px solid",
                            fontSize: ".87rem",
                            boxShadow: "0px 0px 2px 2px rgba(200, 200, 200, .3)",
                            borderColor: "#fff",
                            padding: ".3rem",
                            marginLeft: ".5rem",
                            alignItems: "center",
                        }}>Регистрация</Button>
                    </Link>
                </div>


            </div>
            <div style={{position: 'relative'}}>
                <Box className="m-0 p-0">
                    <Button variant="contained" style={{width: "180px"}} onClick={toggleFormVisibility}>Заказать звонок</Button>
                </Box>

                {isFormVisible && (
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0,
                            width: '450px',
                            position: 'absolute',
                            top: '46px',
                            right: '-2px',
                            padding: '15px',
                            backgroundColor: '#213547;',

                        }}
                        className = {styles.box}
                    >
                        <Typography variant="h4" component="h5" sx={{
                            color: "#fff",
                            padding: '15px 0 20px 0'}}>
                            Форма обратной связи
                        </Typography>
                        <TextField required id="outlined-basic" label="Имя" variant="outlined" sx={{
                            paddingBottom: '10px'}}/>
                        <TextField required id="outlined-basic" label="Телефон" variant="outlined" sx={{
                            paddingBottom: '10px'}}/>
                        <FormControlLabel required control={<Checkbox />} label="Соглашаюсь на обработку персональных данных и с условиями политики конфиденциальности" sx={{
                            paddingBottom: '10px',
                            textAlign: "left",
                            fontSize: '1em',}}/>
                        <Button variant="contained" sx={{
                            marginBottom: '10px'}}>Отправить</Button>
                    </Box>
                )}
            </div>

        </header>
    )
}