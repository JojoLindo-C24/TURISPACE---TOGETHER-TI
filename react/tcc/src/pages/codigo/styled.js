import styled from "styled-components";

const Codigo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.digite-codigo{
    font: 28px Roboto-Thin;
    color: white;
    margin-top: 150px;
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
}

.linha-codigo{
    height: 1.5px;
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
`
export {Codigo};