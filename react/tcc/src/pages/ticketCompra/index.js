import { Container } from "./styled";
import CabecalhoInWhite from "../../components/comum/cabecalhoInWhite"
import BotaoVoltar from "../../components/comum/botaoVoltar";

export default function TicketCompra() {
    return(
        <Container>
            <div className="f1-container">
                <CabecalhoInWhite/>
                <div className="conteudo">
                    <div className="top-content">
                        <div className="detalhesCompra">Detalhes da Compra</div>
                        <div className="n-pedido">N° pedido: 254254968</div>
                    </div>
                    <div className="middle-content">
                        <img className="imgProd" src={"/assets/images/HopiHariIng.png"} alt=""/>
                        <div className="listar-itens">
                            <div className="nomeProd">Ingressos para Hopi Hari</div>
                            <div className="qtd">x2</div>
                            <div className="preco">POR: R$ 110,00</div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="nomeCliente">Nome: Joelma Marins do Santos</div>
                        <div className="dataCompra">Data da Compra: 27/06/2021</div>
                    </div>
                </div>
                <div className="voltar"><BotaoVoltar/></div>
            </div>
        </Container>
    )
}