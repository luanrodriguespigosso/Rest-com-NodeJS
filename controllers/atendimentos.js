// Defini as rotas da aplicação
const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, res) =>
        res.send('Pagina de atendimentos'));

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send('POST atendimento');
    })
}