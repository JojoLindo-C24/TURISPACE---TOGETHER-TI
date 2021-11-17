import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(0, 5, 9, 0.85);
    border-radius: 20px;
    align-items: center;
    border: none;
    cursor: pointer;
    margin: 2em;

&:hover {
    transform: scale(1.05);
    transition: 0.6s;
}

.img-turismo{
    width: 300px;
    height: 300px;
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;
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