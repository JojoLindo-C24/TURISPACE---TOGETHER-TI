import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
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

    async insert(nome, avaliacao, endereco, imagem, informacao, horarioFds, horarioDds, categoria) {
        let r = await api.post('/insert', { nome, avaliacao, endereco, imagem, informacao, horarioFds, horarioDds, categoria })
        return r.data;
    }

    
}