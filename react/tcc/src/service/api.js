import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async cadastro(email, senha, celular, nome) {
        let r = await api.post('/cadastro', { email, senha, celular, nome})
        return r.data;
    }
}