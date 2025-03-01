// components/TodoList.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store.ts';
import {addTodo, toggleTodo, deleteTodo, setColor} from '../../../store/slices/todosSlice.tsx';
import {
    List,
    ListItem,
    ListItemText,
    Checkbox,
    IconButton,
    TextField,
    Button,
    Paper, FormControl,
    InputLabel, NativeSelect,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const [newTodoText, setNewTodoText] = useState('');
    const handleAddTodo = () => {
        if (newTodoText.trim()) {
            dispatch(addTodo(newTodoText));
            setNewTodoText('');
        }
    };



    const handleColorChange = (eventTarget: React.ChangeEvent<HTMLSelectElement>) => {
        const value = eventTarget.target.value;
        const id = eventTarget.target.id; // как пооучить id и связать его со store
        dispatch(setColor(id));
        console.log(value);
        console.log(todos);
        console.log(id);
    }


    return (
        <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
            <TextField
                label="Новая задача"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleAddTodo}>
                Добавить задачу
            </Button>
            <List>
                {todos.map((todo) => (
                    <ListItem key={todo.id}>
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <ListItemText
                            primary={todo.text}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                maxWidth: '555px', // Ограничение ширины
                                whiteSpace: 'normal', // Разрешение переноса текста
                                wordWrap: 'break-word',
                            }}
                        />
                        <FormControl >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Цвет
                            </InputLabel>
                            <NativeSelect
                                defaultValue={""}
                                onChange={handleColorChange}
                            >
                                <option value={''}></option>
                                <option value={'red'}>Красный</option>
                                <option value={'blue'}>Синий</option>
                                <option value={'green'}>Зеленый</option>
                            </NativeSelect>
                        </FormControl>
                        <IconButton onClick={() => dispatch(deleteTodo(todo.id))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default TodoList;