import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import userRegistrationReducer from "../../store/slices/userRegistration.slice.tsx";

interface FormData {
    username: string;
    email: string;
    password: string;
}

const RegisterForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        userRegistrationReducer(data, 'USER/SET_USER');

    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Регистрация
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Имя пользователя обязательно' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin="normal"
                                fullWidth
                                label="Имя пользователя"
                                error={!!errors.username}
                                helperText={errors.username ? errors.username.message : ''}
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
                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default RegisterForm;