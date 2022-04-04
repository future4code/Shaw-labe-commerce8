import React from "react";
import styled from "styled-components";

const CardItemCart = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    span {
        margin-right: 8px;
        align-self: baseline;
    }
`

const BotaoRemover = styled.button`
    align-self: center;
    background-color:white;
    color: black;
    border-radius: 5px;
    `


class CardItemCarrinho extends React.Component {

    render() {
        return (
            <CardItemCart>
                <div>
                    <span>{this.props.itemCarrinho.quantidade}x</span>
                    <span>{this.props.itemCarrinho.nome}</span>
                </div>
                <BotaoRemover onClick={() => this.props.removerProdutoDoCarrinho(this.props.itemCarrinho.id)}>Remover</BotaoRemover>
            </CardItemCart>
        )
    }
}

export default CardItemCarrinho