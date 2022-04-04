import React from 'react'
import styled from 'styled-components'

const HeaderProdutos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-right:70px;

    select{
        margin-left:5px;
        outline: none;
        border-radius:10px;
        text-align:center;
        
    }
`

export default class Home extends React.Component {
    render(){
        return (
            <div>
                
                <HeaderProdutos>
                    <p>Quantidade de produtos: {this.props.produtos.length}</p>
                    <label>Ordenar por: 
                        <select onChange={this.props.changeOrdem}>
                            <option value=''>--- Nenhum ---</option>
                            <option value='crescente'>Preço crescente</option>
                            <option value='decrescente'>Preço decrescente</option>
                            <option value='nomeAZ'>Nome A-Z</option>
                            <option value='nomeZA'>Nome Z-A</option>
                        </select>
                    </label>
                </HeaderProdutos>
            </div>
        )
    }
}