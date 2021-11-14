import styled from "styled-components";

const MinhaConta = styled.div`
    background-image: url(${'/assets/images/fundoMinhaConta.png'});
    background-size: cover;

.Container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.conteudo-MC{
    border-radius: 10px;
    background: rgba(0, 0, 1, 0.74);
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.titulo{
    display: flex;
    flex-direction: column;
    width: 33%;
    align-items: center;
}

.f1-titulo{
    font: 32px OpenSans-ExtraBold;
    color: white;
}

.line-content{
    margin-top: 10px;
    border-radius: 5px;
    background-color: white;
    height: 4px;
    width: 100%;
}

.conteudo-MI{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
}

.informacoes{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35%;
}

.botoes{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 26%;
}

.informacoesCliente{
    background-color: rgba(0, 5, 9, 0.85);
    border: none;
    display: flex;
    width: 30em;
    height: 3em;
    border-radius: 5px;
    padding: 1.7em;
    font: 18px Roboto-Light;
    color: white;
}

input  {
    background-color: rgba(0, 5, 9, 0.85);
    border: none;
    display: flex;
    width: 30em;
    height: 3em;
    border-radius: 5px;
    padding: 1.7em;
    color: white;
    outline: none;
}
.alterar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font: 20px OpenSans-ExtraBold;
    background-color: rgba(0, 5, 9, 0.85);
    border: none;
    color: white; 
    border-radius: 7px;
    cursor: pointer;
    padding: 0.5em 1em;
}



.pacotes{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font: 20px OpenSans-ExtraBold;
    background-color: rgba(0, 5, 9, 0.85);
    border: none;
    color: white; 
    border-radius: 7px;
    cursor: pointer;
    padding: 0.5em 1em;
}

.trocar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font: 20px OpenSans-ExtraBold;
    background-color: rgba(0, 5, 9, 0.85);
    border: none;
    color: white; 
    border-radius: 7px;
    cursor: pointer;
    padding: 0.5em 1em;
}


.titulo{
   font-size: 40px;
   color:white;

}


`
export {MinhaConta};