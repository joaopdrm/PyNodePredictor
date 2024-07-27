const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Frontend para Exibir Previsões</h1><form id="predict-form"><input type="text" id="input" placeholder="Digite um número"><button type="submit">Enviar</button></form><div id="result"></div><script src="/script.js"></script>');
});

app.post('/predict', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/predict', {
            features: [req.body.feature]
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer a previsão' });
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor Node.js rodando na porta ${port}`);
});
