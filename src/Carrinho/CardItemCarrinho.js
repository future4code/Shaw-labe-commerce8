import React from "react";
import styled from "styled-components";

const CardItemCart = styled.div `
   display:flex;
   flex-direction: column;
   margin-right: 50px;

   
    
    align-items: center;
    color: white;
   justify-content: center;
   
`

const BotaoRemover = styled.button `
    align-self: center;
    margin-top: 8px;
    background-color:white;
    color: black;
    border-radius: 5px;
    `


class CardItemCarrinho extends React.Component {
    
    render(){
    return (
        <CardItemCart>
            <p>{this.props.itemCarrinho.quantidade}x</p>
            <p>{this.props.itemCarrinho.nome}</p>
            <BotaoRemover onClick={() => this.props.removerProdutoDoCarrinho(this.props.itemCarrinho.id)}>Remover</BotaoRemover>
        </CardItemCart>
    )
}
}

export default CardItemCarrinho