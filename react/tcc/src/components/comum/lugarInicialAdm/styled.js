import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: none;
    cursor: pointer;
    margin: 2em;
    position: relative;

&:hover{
    .botao-editar{
        visibility: visible;
    }
}

    .botao-editar{
    background-color: transparent;
    border: none;
    visibility: hidden;
    cursor: pointer;
    position: absolute;
}

.img-bt-editar{
    height: 40px;
    width: auto;
    cursor: pointer;
}

.bloco-lugar{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 5, 9, 0.85);
    border-radius: 20px;
}

.img-turismo{
    width: 300px;
    height: 300px;
    border-radius: 20px 20px 0px 0px;
}

.nm-lugar{ 
    padding: 1em 0em 1em 0em;
    font: 22px Rosario-SemiBold;
    color: white;
    border: none;
    cursor: pointer;
    background-color: transparent;
}

.nm-lugar:hover{
    text-decoration: underline;
}
`
export {Container};