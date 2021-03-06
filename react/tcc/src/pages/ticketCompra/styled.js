import styled from "styled-components";

const Container = styled.div`
    background-image: url(${'/assets/images/BackgroundTicket.png'});
    width: 100vw;
    height: 100vh;
    position: relative;

.f1-container{
    background-color: rgba(0, 5, 9, 0.75);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.conteudo{
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 15%;
}

.top-content{
    display: flex;
    flex-direction: row;
    background-color: rgba(153, 153, 153, 0.7);
    justify-content: space-between;
    height: 12vh;
    align-items: center;
    padding: 2em;
}

.middle-content{
    display: flex;
    flex-direction: row;
    background-color: rgba(245, 245, 245, 0.9);
    padding: 1em 3em 1em 3em;
    justify-content: space-between;
    height: 24vh;
}

.bottom-content{
    display: flex;
    flex-direction: column;
    background-color: rgba(25, 47, 69, 0.9);
    padding: 1.3em;
}

.imgProd{
    width: 300px;
    height: auto;
    border-radius: 10px;
    margin-right: 20px;
}

.listar-itens{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}

.nomeProd{
    font: 32px Roboto-Light;
    color: black;
}

.qtd{
    font: 36px Rosario-SemiBold;
    color: black;
}

.preco{
    padding: 1em;
    background-color: #7a7a7a;
    font: 18px Roboto-Light;
    color: white;
    border-radius: 10px;
}

.detalhesCompra{
    font: 22px Roboto-Thin;
    color: white;
}

.n-pedido{
    font: 22px Roboto-Light;
    color: white;
}

.nomeCliente{
    font: 18px Roboto-Light;
    color: white;
}

.RgCliente{
    font: 18px Roboto-Light;
    color: white;
}

.dataCompra{
    font: 18px Roboto-Light;
    color: white;
}

.voltar{
    margin-bottom: 10px;
}
`
export {Container};