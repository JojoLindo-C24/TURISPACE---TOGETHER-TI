import styled from "styled-components";
import BackgroundFaleConosco from "../../assets/images/fundo_fale_conosco.png"

const AdmMensagens = styled.div`
    background-image: url(${BackgroundFaleConosco});
    background-repeat: no-repeat;
    background-size: cover;
   
    

.Container{
    width: 98vw;
    height: 100vh;
    padding: 2.9em 4em;
   
    
    
}

.conteudo{
    height: 40em;
    width: 85em;
    background-color: rgba(4, 30, 57, 0.91);
    border-radius: 0.4em;
    padding: 2.9em 4em;
   
    
}

.titulo {
    display: flex;
    padding-top: 2em;
    
}

.barrinha{
    
}

.nomeAvaliacao{
    color:white;
    font-size:50px;
    padding: 0em 0.5em;
}
`
export {AdmMensagens};