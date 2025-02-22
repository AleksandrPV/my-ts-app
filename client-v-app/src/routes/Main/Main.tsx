import Layout from "../../components/Layout/Layout.tsx";
import styles from "./Main.module.scss";
import Button from "../../components/Button/Button.tsx";
import {useState} from "react";
import FormPractice from "../../components/FormPractice/FormPractice.tsx";


export default function Main() {
    const [count, setCount] = useState(0);
    function addCount() {
        setCount(count + 1);
    }
    function addCount2() {
        setCount(count -1);
    }

    return (
        <Layout>
            <div className={styles.container}>
                <h1>Меня зовут Александр, я веб разработчик</h1>
                <p>Я создаю высокопроизводительные, красивые веб-сайты, которые ориентированы на конверсию, соответствуют бренду и удобны для людей.</p>
                </div>
            <div className={styles.buttonsContainer}>
                <Button label='click for +1' onClick={addCount}/>
                <Button label='click for -1' onClick={addCount2}/>
                {/*<Count.Provider value={count}>*/}
                <div>{count}</div>
                {/*</Count.Provider>*/}
                <FormPractice/>

            </div>

            <div className={styles.buttonsContainer}>
            </div>

        </Layout>
    )
}