import styled from 'styled-components'

const Container = styled.div`
    background-size: cover;
    background-image: url(${'/assets/images/BackgroundInfoPac.png'});
    width: 100vw;
    height: 250vh;
    position: relative;

.f1-container{
    background-color: rgba(0, 5, 9, 0.75);
    height: 250vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.conteudo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 80%;
}

.TituloLugar{
    font: 64px Roboto-Thin;
    color: white;
}

.componentes{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    width: 30%;
    background-color: rgba(0, 5, 9, 0.95);
    border-radius: 10px;
    border: 1px solid white;
}

.bonequinhos{
    height: 68px;
    width: auto;
    margin-right: 15px;
}

.tituloComponentes{
    font: 20px OpenSans-Bold;
    color: white;
}

.conteudoComponentes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.coluna1{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.coluna2{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.content1{
    display: flex;
    flex-direction: column;
}

.content{
    font: 18px OpenSans-Bold;    
    color: white;
}

.titulo{
    font: 38px Roboto-Light;
    color: white;
}

.informacoes{
    font: 20px OpenSans-SemiBold;
    color: white;
    width: 85%;
}

.link{
    font: 20px OpenSans-Bold;
    color: white;
}

.botoes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 7%;
}
`
export {Container};