import {Container} from './styled';

export default function Error() {
    return(
        <Container>
            <div className="conteudo">
                <img className="imagem" src="/assets/images/Error-Icon.png" alt="" />
                <div className="texto">404: Página Não Encontrada</div>
            </div>
        </Container>
    )
}