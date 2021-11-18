import { Container } from "./styled";
import Pacotes from "../../components/comum/produtos";
import { useEffect, useState } from "react";
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite'
import Rodape from '../../components/comum/rodape'
import LugarInicial from "../../components/comum/lugarInicial"

import Cookies from 'js-cookie'
import { useHistory } from "react-router";

import Api from '../../service/api'
const api = new Api();

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    
    const navigation = useHistory();

    let usuarioLogado = Cookies.get('usuario-logado');
    if (usuarioLogado == null)
      navigation.push('/');

    async function listarPacotes() {
        let r = await api.pacotesInicial();
        setProdutos(r);
    }

    // let pacote = produtos.filter(p => p.bt_ativo === 1);
      

    useEffect(() => {
        listarPacotes();
    }, [])


    const [produtos1, setProdutos1] = useState([]);

    async function listarLugaresInicial() {
        let r = await api.shoppingLugares();
        setProdutos1(r);
    }

    let lugar = produtos1.filter(p => p.id_lugar === 18 || p.id_lugar === 19 || p.id_lugar === 20 || p.id_lugar === 3 || p.id_lugar === 11 || p.id_lugar === 6);

    useEffect(() => {
        listarLugaresInicial();
    }, [])

    // function Comprar () {
    //     let carrinho = Cookies.get('carrinho');
    //     carrinho = carrinho !== undefined
    //             ? JSON.parse(carrinho)
    //             : [];

    //     if(carrinho.some(item => item.id === produto.id) === false)
    //        carrinho.push({...produto, qtd: 1});

    //     Cookies.set('carrinho', JSON.stringify(carrinho));

    //     navigation.push('/minhaSacola')
    // }

    return(
        <Container>
            <div className="container1">
              <CabecalhoInWhite></CabecalhoInWhite>
              <img className="Turispace" src={"../../assets/images/Turispace 1.png"} alt=""/>
              <div className="Turispace-subtitulo">Compre já seu pacote, e deixe suas férias garantidas</div>
              <div className="Turispace-promocoes">Promoções da Temporada</div>
              <div className="lista-produtos">
                  {produtos.map(item => 
                          <Pacotes 
                          key={item.id_pacote}
                          info={item} />
                      )}
              </div>
            </div>
            <div className="container2">
              <div className="Turispace-promocoes">Turismo em São Paulo</div>
              <div className="lugaresInicial">
                {lugar.map(item => 
                            <LugarInicial 
                            key={item.id}
                            lugares={item} />
                        )}
              </div>
              <a href="/lugares" className="mais-lugares">Ver Mais Lugares</a>
              <Rodape></Rodape>
            </div>
        </Container>
    )
}