import BotaoVoltarInWhite from '../../components/comum/botaoVoltarInWhite';
import BotaoCompraInWhite from '../../components/comum/botaoCompraInWhite';
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite';
import {Container} from './styled';
// import Cookies from 'js-cookie';
import { useState } from 'react';
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';

// import { CarouselConfig } from './config';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

export default function DetalhesPacote(props) {
    const [produto] = useState(props.location.state);
    // const navigation = useHistory();

    // function comprar() {
    //     let carrinho = Cookies.get('carrinho');
    //     carrinho = carrinho !== undefined
    //                     ? JSON.parse (carrinho)
    //                     : [];
    

    // if (carrinho.some(item => item.id === produto.id) === false)
    //     carrinho.push({...produto, qtd: 1 });

    //     Cookies.set('carrinho', JSON.stringify(carrinho));

    //     navigation.push('/carrinho');
    // }

    // const [img, setImg] = useState([]);

    // function listar() {
    //     const a = [
    //         {
    //             id: 1,
    //             imagem: '/assets/images'
    //         },
    //         {
    //             id: 2,
    //             imagem: ''
    //         },
    //         {
    //             id: 3,
    //             imagem: ''
    //         },{
    //             id: 4,
    //             imagem: ''
    //         }
    //     ]

    //     setImg(a);
    // }

    // useEffect(() => {
    //     listar();
    // },[])


    return(
        <Container>
            <div className="f1-container">
                <CabecalhoInWhite/>
                <div className="conteudo">
                    <div className="TituloLugar">{produto.nm_pacote}</div>
                    {/* <Carousel 
                        responsive={CarouselConfig}
                        infinite={true}
                        showDots={true}
                        containerClass="carousel-container"
                    > */}
                        {/* {img.map(item => 
                            <Pacotes 
                            key={item.id}
                            info={item} />
                        )} */}
                        <img className="imagem1" src={produto.ds_imagem3} alt="" />
                    {/* </Carousel> */}
                    <div className="componentes">
                        <div className="tituloComponentes">INFORMAÇÕES DO PACOTE</div>
                        <div className="conteudoComponentes">
                            <div className="coluna1">
                                <div className="content1">
                                    <img className="bonequinhos" src="/assets/images/bonequinhos.png" alt="" />
                                    <div className="content">{produto.ds_ingresso}</div>
                                </div>
                                <div className="content1">
                                    <div className="content">Data</div>
                                    <div className="content">{produto.dt_data}</div>
                                </div>
                            </div>
                            <div className="coluna2">
                                <div className="content1">
                                    <div className="content">Preço</div>
                                    <div className="content">{produto.vl_preco}</div>
                                </div>
                                <div className="content1">
                                    <div className="content">Horário</div>
                                    <div className="content">{produto.ds_horario}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="titulo">ENDEREÇO</div>
                    <div className="informacoes">{produto.ds_endereco}</div>
                    <div className="titulo">CANCELAMENTO</div>
                    <div className="informacoes">{produto.ds_cancelamento}</div>
                    <div className="titulo">ACESSO</div>
                    <div className="informacoes">{produto.ds_acesso}</div>
                    <div className="link">{produto.ds_link}</div>
                </div>
                <div className="botoes">
                    <BotaoVoltarInWhite/>
                    <Link to={{
                        state: props.info,
                        pathname: '/minhaSacola'
                    }}>
                        <button className="botao">
                            <img src="/assets/images/compra.svg" className="imagem" alt="" />
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}