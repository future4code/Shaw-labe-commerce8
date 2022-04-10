import React from "react";
import styled from "styled-components";
import CardItemCarrinho from "./CardItemCarrinho";


const ContainerCarrinho = styled.div `
color: white;
grid-column:3/4;

h3{
    text-align:center;
    margin-right: 50px;
    margin-top: 18%;
}

p{
    margin-left:59px;
}

`

const ListaCarrinho = styled.div `
    display: flex;
    color: white;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

class Carrinho extends React.Component {

    calculaValorTotal = () => {
        let valorTotal = 0

        for(let produto of this.props.produtosNoCarrinho){
            valorTotal += produto.valor * produto.quantidade
        }
        return valorTotal
    }

    render(){

        return (
            <ContainerCarrinho>
                <h3>Carrinho:</h3>
                <ListaCarrinho>
                    {this.props.produtosNoCarrinho.map((produto) => {
                        return <CardItemCarrinho 
                        key={produto.id+10} 
                        itemCarrinho={produto}
                        removerProdutoDoCarrinho={this.props.removerProdutoDoCarrinho}
                        />
                    })}
                </ListaCarrinho>
                <p>Valor Total: R${this.calculaValorTotal()},00</p>
            </ContainerCarrinho>
        )
    }
}

export default Carrinho