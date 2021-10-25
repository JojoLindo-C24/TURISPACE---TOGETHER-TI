import styled from "styled-components";

const Container = styled.div`

.botaoVoltar{
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 5, 9, 0.9);
    border: none;
    border-radius: 0px 20px 20px 0px;
    padding: 1em;
    align-items: center;
    cursor: pointer;
}

.voltar{
    font: 18px Roboto-Light;
    color: white;
    text-decoration: none;
    cursor: pointer;
}

.voltar:hover{
    text-decoration: underline;
}

.img-voltar{
    cursor: pointer;
}
`
export {Container}