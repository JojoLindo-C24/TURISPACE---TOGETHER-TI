import React from 'react'
import CabecalhoAdm from '../../components/comum/cabecalhoAdm';

import { useState } from 'react'
// import { useHistory } from 'react-router';
  
import { Container } from './styled'

import Api from '../../service/api'
const api = new Api();


export default function AdmInserir() {
  const [nome, setNome] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [imagem, setImagem] = useState('');
  const [informacao, setInformacao] = useState('');
  const [horarioFds, setHorarioFds] = useState('');
  const [horarioDds, setHorarioDds] = useState('');
  const [categoria, setCategoria] = useState('');

  // const navigation = useHistory();

  const inserir = async () => {
    let t = await api.insert(nome, avaliacao, endereco, imagem, informacao, horarioFds, horarioDds, categoria)
    if(t.erro){
      alert(`${t.erro}`);
    } else{
      alert('Deu Certo!');
    }
  }

  return(
    <Container>
        <CabecalhoAdm/>
        <div className="Conteudo">
          <div className="Box-Titulo">
            <img class="Barrinha" src={"../../assets/images/barrinha.png"} alt=""/> <span>INSERIR</span>
          </div>
          <div className="Parte1">
            <div className="Parte2"> 
              <div className="coluna1">
                <input value={nome} onChange={e => setNome(e.target.value)} className="inputs" placeholder="Nome"></input>
                <input value={avaliacao} onChange={e => setAvaliacao(e.target.value)} className="inputs" placeholder="Avaliação"></input>
                <input value={endereco} onChange={e => setEndereco(e.target.value)} className="inputs" placeholder="Endereço"></input>
                <input value={imagem} onChange={e => setImagem(e.target.value)} className="inputs" placeholder="Imagem URL"></input>
              </div>
              <div className="coluna2">
                <input value={informacao} onChange={e => setInformacao(e.target.value)} type="text" className="inputs" placeholder="Informação"></input>
                <input value={horarioFds} onChange={e => setHorarioFds(e.target.value)} type="text" className="inputs" placeholder="Horário de SAB à DOM"></input>
                <input value={horarioDds} onChange={e => setHorarioDds(e.target.value)} type="text" className="inputs" placeholder="Horário de SEG à SEX"></input>
                <input value={categoria} onChange={e => setCategoria(e.target.value)} type="text" className="inputs" placeholder="Categoria"></input>
              </div>
            </div>
            <button onClick={inserir} className="botao-alterar">INSERIR</button>
          </div>
        </div>
       
    </Container>
  )
}