import BotaoVoltar from '../../components/comum/botaoVoltar';
import CabecalhoInWhite from '../../components/comum/cabecalhoInWhite';
import {Container} from './styled';

export default function InfoPacote() {
    return(
        <Container>
            <CabecalhoInWhite/>
            <div className="conteudo">
                <div className="TituloLugar">HOPI HARI</div>
                {/* CARROSSEL */}
                <img className="" src="" alt="" />
            </div>
            <BotaoVoltar/>
        </Container>
    )
}