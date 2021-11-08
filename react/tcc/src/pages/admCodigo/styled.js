import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${'../../assets/images/BackgroundTicket.png'});
    height: 100vh;
    width: 100vw;

.f1-container{
    width: 80vw;
    height: 80vh;
    background-color: rgba(0, 5, 9, 0.9);
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
}

.digite-codigo{
    font: 28px Roboto-Thin;
    color: white;
}

.codigo{
    display: flex;
    flex-direction: row;
    margin-top: 100px;
}

.n1{
    width: 60px;
    height: 65px;
    border: none;
    margin-left: 10px;
    border-radius: 12px;
    border: none;
    font: 32px Roboto-Thin;
    text-align: center  ;
    color: #777777;
    outline: none;
}

.linha-codigo{
    height: 1.7px;
    width: 60px;
    background-color: #777777;
    margin-left: 10px;
}

.numero{
    width: 80px;
    height: 80px;
    border-radius: 22px;
    border: none;
    background-color: white;
    margin-left: 20px;
    margin-right: 20px;
}

.botao{
    margin-top: 50px;
    padding: 0.7em 1em;
    border-radius: 15px;
    border: 2px solid white;
    background-color: transparent;
    font: 18px Roboto-Light;
    color: #ffffff;
    cursor: pointer;
}

.botao:hover{
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.5s;
}
`
export {Container};