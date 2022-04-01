import React from 'react';
import styled from 'styled-components'
import Home from './Components/Home/Home'
import CardProduto from './Components/CardProduto/CardProduto';
import Images from './img/Images'

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
            name: "Balões metálicos",
            value: 15.0,
            imageUrl: Images.balao,
        },
        {
            id: 2,
            name: "Bonecos Astronautas",
            value: 27.0,
            imageUrl: Images.bonecoAstro,
        },
        {
            id: 3,
            name: "Miniaturas de Foguetes",
            value: 24.0,
            imageUrl: Images.bonecoFoguete,
        },
        {
            id: 4,
            name: "Capa para Celular",
            value: 12.0,
            imageUrl: Images.capaCelular,
        },
        {
            id: 5,
            name: "Conjunto Colar de Casal Magnético",
            value: 16.0,
            imageUrl: Images.colar,
        },
        {
            id: 6,
            name: "Luminária Globo Estrelas",
            value: 42.0,
            imageUrl: Images.luminaria,
        },
        {
            id: 7,
            name: "Cordão com Luzes Tema Espacial",
            value: 39.0,
            imageUrl: Images.luzes,
        },
        {
            id: 8,
            name: "Mochila Infantil Espaço",
            value: 69.0,
            imageUrl: Images.mochilaEspaco,
        },
        {
            id: 9,
            name: "Mochila para Pets",
            value: 340.0,
            imageUrl: Images.mochilaPet,
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
