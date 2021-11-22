import { Container } from "./styled";
import { useState } from "react";

export default function ItemPgto(props) {
    const [produto, setProduto] = useState(props.ItemPgto);

    return (
        <Container>
            <div className="nome">{produto.nm_pacote}</div>
            <div className="especificacoes">
                <div className="preco">{produto.vl_preco}</div>
                <div className="qtd">(x2)</div>
                <button className="remover-icon"></button>
            </div>
        </Container>
    )
}