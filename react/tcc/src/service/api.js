import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030',
})

export default class Api {
    async cadastro(email, senha, celular, nome) {
        let r = await api.post('/cadastro', { email, senha, celular, nome })
        return r.data;
    }

    async login(email, senha) {
        let r = await api.post('/login', { email, senha })
        return r.data;
    }

    async infoUsuario(nome, email, senha, celular) {
        let r = await api.put('infoUsuario', {nome, email, senha, celular})
        return r.data;
    }

    async insert(nome, avaliacao, endereco, imagem, informacao, horarioFds, horarioDds, categoria) {
        let r = await api.post('/insert', { nome, avaliacao, endereco, imagem, informacao, horarioFds, horarioDds, categoria })
        return r.data;
    }


    async inserirPacotes(titulo, data, ingresso, preco, horario, cancelamento, endereco, acesso, imagem1, imagem2, imagem3, imagem4, link){
        let r = await api.post('/inserirPacotes', {titulo, data, ingresso, preco, horario, cancelamento, endereco, acesso, imagem1, imagem2, imagem3, imagem4, link});
        return r.data;
    }

    async pacotesIncial() {
        let r = await api.get('pacotesInicial', {});
        return r.data;
    }

    async listarMensagens(idMensagem) {
        let r = await api.get(`/chat/${idMensagem}`);
        return r.data;
    }

    async inserirMensagem( nome, mensagem) {
        let chat = {
            nome: nome,
            mensagem: mensagem
        }
        let r = await api.post(`/chat`, chat);
        return r.data;
    }

    
}