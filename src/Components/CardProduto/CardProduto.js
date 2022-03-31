import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    margin: 10px;
    padding-bottom: 10px;
    width: 200px;
    img {
        width: 200px;
    }
`

export default class CardProduto extends React.Component {
    render(){
        return (
            <Card>
                <img src={this.props.imgURL} />
                <h3>{this.props.nomeProduto}</h3>
                <p>R${this.props.preco},00</p>
                <button onClick={this.props.addCarrinho}>Adicionar ao carrinho</button>
            </Card>
        )
    }
}