import React from 'react';
import styled from 'styled-components'
import Home from './Components/Home/Home'
import CardProduto from './Components/CardProduto/CardProduto';

const DisplayProdutos = styled.div`
    display: flex;
    flex-direction: column;
`
const ListaProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class App extends React.Component {
    state = {
        produtos: [{
            id: 1,
            name: "Foguete da Missão Apollo 11",
            value: 10000.0,
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            id: 1,
            name: "Space Shuttle",
            value: 230000.0,
            imageUrl: "https://picsum.photos/200/200",
        },
        {
            id: 2,
            name: "Foguete da Missão Apollo 12",
            value: 15000.0,
            imageUrl: "https://picsum.photos/200/200",
        }],
        ordem: ''
    }

    onChangeOrdem = (event) => {
        this.setState({ ordem: event.target.value })
    }

    addCarrinho = () => { }

    render() {
        const ordenaProdutos = () => {
            let listaOrdenada
            switch (this.state.ordem) {
                case 'crescente':
                    listaOrdenada = this.state.produtos.sort((a, b) => a.value - b.value)
                    break;
                case 'decrescente':
                    listaOrdenada = this.state.produtos.sort((a, b) => b.value - a.value)
                    break;
                case 'nomeAZ':
                    listaOrdenada = this.state.produtos.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1
                        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return -1
                        } else {
                            return 0
                        }
                    })
                    break;
                case 'nomeZA':
                    listaOrdenada = this.state.produtos.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1
                        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return 1
                        } else {
                            return 0
                        }
                    })
                    break;
                default:
                    listaOrdenada = this.state.produtos
                    break;
            }
            return listaOrdenada
        }
        return (
            <div>
                <DisplayProdutos>
                    <Home produtos={this.state.produtos} changeOrdem={this.onChangeOrdem} />
                    <ListaProdutos>
                        {ordenaProdutos().map(produto => {
                            return (<CardProduto imgURL={produto.imageUrl} nomeProduto={produto.name} preco={produto.value} addCarrinho={this.addCarrinho} />)
                        })}
                    </ListaProdutos>
                </DisplayProdutos>
            </div>
        )
    }
}

export default App;
