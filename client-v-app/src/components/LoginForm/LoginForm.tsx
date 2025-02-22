import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";

interface FormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        console.log(data);
        if ((data.email == 'react@mail.ru')&&(data.password == 'react')) {
            const navigate = useNavigate();
            navigate('/'); // Перенаправление на главную страницу
            console.log("Вход совершен!");
        }
        // Здесь можно добавить логику для отправки данных на сервер
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Вход
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
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
                        rules={{ required: 'Пароль обязателен' }}
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
                    >
                        Войти
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginForm;