const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let articles = [
    { id: 1, title: "Название статьи №1", excerpt: "Содержание статьи №1", date: '2023-10-01' },
    { id: 2, title: "Название статьи №2", excerpt: "Содержание статьи №2", date: '2024-11-01' },
    { id: 3, title: "Название статьи №3", excerpt: "Содержание статьи №3", date: '2025-12-01' },
    { id: 4, title: "Название статьи №4", excerpt: "Содержание статьи №4", date: '2023-10-01' },
    { id: 5, title: "Название статьи №5", excerpt: "Содержание статьи №5", date: '2024-11-01' },
];

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// Get all articles
app.get('/api/articles', (req, res) => {
    res.json(articles);
});

// Get article by ID
app.get('/api/articles/:id', (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
});

// Create new article
app.post('/api/articles', (req, res) => {
    const newArticle = {
        id: articles.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
});

// Update article
app.put('/api/articles/:id', (req, res) => {
    const article = articles.find(a => a.id === parseInt(req.params.id));
    if (!article) return res.status(404).json({ message: "Article not found" });

    article.title = req.body.title || article.title;
    article.content = req.body.content || article.content;
    res.json(article);
});

// Delete article
app.delete('/api/articles/:id', (req, res) => {
    articles = articles.filter(a => a.id !== parseInt(req.params.id));
    res.json({ message: "Article deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
