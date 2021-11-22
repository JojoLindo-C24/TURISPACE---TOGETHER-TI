import axios from 'axios'
const api = axios.create({
    baseURL: 'https://turispaceheroku.herokuapp.com/',
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


    async loginAdm(emailAdm, senhaAdm) {
        let r = await api.post('/loginAdm', { emailAdm, senhaAdm })
        return r.data;
    }

    async infoUsuario(nome, email, senha, celular) {
        let r = await api.put('infoUsuario', {nome, email, senha, celular})
        return r.data;
    }

    async insert(nome, avaliacao, endereco, imagem, informacao, horarioFds, horarioDds, categoria) {
        let r = await api.post('/inserirLugares', { nome, avaliacao, endereco, imagem, informacao, horarioFds, horarioDds, categoria })
        return r.data;
    }

    async inserirPacotes(titulo, data, ingresso, preco, horario, cancelamento, endereco, acesso, imagem1, imagem2, imagem3, imagem4, link){
        let r = await api.post('/inserirPacotes', {titulo, data, ingresso, preco, horario, cancelamento, endereco, acesso, imagem1, imagem2, imagem3, imagem4, link});
        return r.data;
    }

    async pacotesInicial(titulo, data, ingresso, preco, horario, cancelamento, endereco, acesso, imagem1, imagem2, imagem3, imagem4, link) {
        let r = await api.get('/pacotesInicial', {titulo, data, ingresso, preco, horario, cancelamento, endereco, acesso, imagem1, imagem2, imagem3, imagem4, link});
        return r.data;
    }

    async shoppingLugares(nome, avaliacao, endereco, imagem, informacao, horarioFds, horarioDds, categoria){
        let r = await api.get('/shoppingLugares', {nome, avaliacao, endereco, imagem, informacao, horarioFds, horarioDds, categoria})
        return r.data;
    }

    async listarMensagens(nome, mensagem) {
        let r = await api.get(`/chat`, {nome, mensagem});
        return r.data;
    }

    async inserirMensagem( nome, mensagem ) {
        let chat = {
            nome: nome,
            mensagem: mensagem
        }
        let r = await api.post(`/chat`, chat);
        return r.data;
    }

    
}