import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/userSlice.tsx";

import { useNavigate } from 'react-router-dom';


interface FormData {
    userName: string;
    email: string;
    password: string;
}

const RegisterForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const dispatch = useDispatch()
    const onSubmit = (data: FormData) => {
        console.log("Новый юзер: ", data);
        dispatch(setUser(data));
    };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/'); // Переход на главную страницу
    };



    return (
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Регистрация
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                    <Controller
                        name="userName"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Имя пользователя обязательно' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                label="Имя пользователя"
                                error={!!errors.userName}
                                helperText={errors.userName ? errors.userName.message : ''}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Email обязателен',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Некорректный email',
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                label="Email"
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ''}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Пароль обязателен', minLength: { value: 6, message: 'Пароль должен быть не менее 6 символов' } }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                label="Пароль"
                                type="password"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleClick}

                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default RegisterForm;