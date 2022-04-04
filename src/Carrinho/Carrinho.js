import React from "react";
import styled from "styled-components";
import CardItemCarrinho from "./CardItemCarrinho";


const ContainerCarrinho = styled.div `
    background-color: #262223;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;
    padding: 1em;
    width: 300px;
    margin-right: 2em;

h3{
    text-align:center;
}
p{
}

`

const ListaCarrinho = styled.div `
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
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