const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Servir arquivos do Front-end
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para receber os dados do formulário
app.post('/api/formulario', (req, res) => {
    console.log('Dados recebidos:', req.body);
    res.status(200).send({ message: 'Dados recebidos com sucesso!' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
