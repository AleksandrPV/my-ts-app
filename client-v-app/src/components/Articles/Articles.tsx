// src/App.js
import { Container, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import {v4 as uuid} from "uuid";

interface ArticlesProps {
    userId: string;
    id: string;
    title: string;
    body: string;

}

export default function Articles() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setArticles(data);

        }
        fetchArticles();
    }, []);

    articles.map((item: ArticlesProps) => {
        item.id = uuid();
    });
    // console.log(articles);

    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Статьи
            </Typography>
            <Grid container spacing={3}>
                {articles.map((article: ArticlesProps) => (
                    <Grid item key={article.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {article.title}
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    {article.body}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {article.userId}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Читать далее...
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
