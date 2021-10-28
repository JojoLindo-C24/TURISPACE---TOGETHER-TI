import styled from 'styled-components'

const Container = styled.div`
    background-image: url(${"/assets/images/BackgroundTicket.png"});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.conteudo{
    background-color: rgba(0, 5, 9, 0.75);
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imagem{
    width: 30%;
    height: auto;
}

.texto{
    font: 70px Roboto-bold;
    color: white;
}
`
export {Container};