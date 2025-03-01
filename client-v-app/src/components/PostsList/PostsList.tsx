// features/posts/PostsList.tsx
import React from 'react';
import { useGetPostsQuery } from '../../api/postsApi';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Container,
    CircularProgress,
    Alert,
} from '@mui/material';

const PostsList: React.FC = () => {
    const { data, error, isLoading } = useGetPostsQuery();

    if (isLoading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Container>
        );
    }

    if (error) {
        return (
            <Container sx={{ mt: 4 }}>
                <Alert severity="error">Ошибка загрузки постов!</Alert>
            </Container>
        );
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Список постов
            </Typography>
            <Grid container spacing={3}>
                {data?.map((post) => (
                    <Grid item key={post.id} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PostsList;