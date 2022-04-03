import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding-bottom: 10px;
    width: 200px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 5px 10px grey;
    transition: all .2s ease-in-out;
    :hover {
        transform: scale(1.1);
    }
    img {
        width: 200px;
    }
    h3 {
        padding: 0 10px;
    }
`

export default class CardProduto extends React.Component {
    render(){
        return (
            
            <Card>
                <img src={this.props.imgURL} alt={this.props.nomeProduto} />
                <h3>{this.props.nomeProduto}</h3>
                <p>R${this.props.preco},00</p>
                <button onClick={() => this.props.addCarrinho(this.props.idProduto)}>Adicionar ao carrinho</button>
                {/* {console.log('id card', typeof this.props.idProduto)} */}
            </Card>

            
        )
    }
}