import Layout from "../../components/Layout/Layout.tsx";
import styles from "./Main.module.scss";
import Button from "../../components/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {decrement, increment} from "../../store/slices/counterSlice.tsx";
import TodosBox from "../../components/TodosBox/TodosBox.tsx";



export default function Main() {
    // const [count, setCount] = useState(0);
    // function addCount() {
    //     setCount(count + 1);
    // }
    // function addCount2() {
    //     setCount(count -1);
    // }

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <Layout>
            <div className={styles.container}>
                <div>
                    <h1>Меня зовут Александр, я веб разработчик</h1>
                    <p>Я создаю высокопроизводительные, красивые веб-сайты, которые ориентированы на конверсию, соответствуют бренду и удобны для людей.</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.buttonsContainer}>
                        <Button label='Клик для +1' onClick={() => dispatch(increment())}/>
                        <Button label='Клик для -1' onClick={() => dispatch(decrement())}/>
                        <div>
                            <span> Количество кликов: </span> {count}</div>
                    </div>
                </div>
            <TodosBox />
            </div>



        </Layout>
    )
}