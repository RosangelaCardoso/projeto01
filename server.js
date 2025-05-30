const express = require('express');
const path = require('path');
const app = express();

// Define a porta
const PORT = 3000;

// Middleware para arquivos estáticos (CSS, imagens etc.)
app.use(express.static(path.join(__dirname, 'views')));

// Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/sobre.html'));
});


app.get((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
