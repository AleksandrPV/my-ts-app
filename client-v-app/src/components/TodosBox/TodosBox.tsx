
import {
    Container,
    Typography,
} from "@mui/material";
import TodoList from "./TodoList/Todolist.tsx";


export default function TodosBox() {
    return (
        <>
            <Container maxWidth="md">
                <Typography variant="h3" align="center" gutterBottom>
                    Список задач
                </Typography>
                <TodoList />
            </Container>
        </>
    )
}