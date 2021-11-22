import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 1em;
background-color:  rgba(0, 5, 9, 0.9);
border-radius: 15px;
align-items: center;
justify-content: space-between;

.especificacoes{
    display: flex;
    flex-direction: column;
}

.nome{
    font: 16px Roboto-Light;
    color: white;
}

.preco{
    font: 16px Roboto;
    color: white;
}

.qtd{
    font: 16px Roboto;
    color: white;
}
`

export { Container };