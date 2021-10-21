import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-image: url("../assets/images/BackgroundTicket.png");
    height: 100vh;
    width: 100vw;
    position: relative;

.f1-container{
    display: flex;
    flex-direction: row;
    background-color: #000509BF;
    height: 100vh;
    width: 100vw;
    position: relative;
}

.botaoVoltar{
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #000509BF;
    border-radius: 0px 15px 15px 0px;
    border: none;
    padding: 1em 2em;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;
    align-self: flex-end;
    margin-bottom: 3%;
}

.voltar{
    font: 16px Roboto-Light;
    color: white;
    margin-bottom: 5px;
}

.img-voltar{
    height: 25px;
    width: auto;
}
`
export {Container};