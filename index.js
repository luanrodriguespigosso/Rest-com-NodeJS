// Subir o servidor
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conectado ao db com sucesso!')

        const app = customExpress();

        app.listen(3000, () => console.log('Server running port 3000'));
    }
});