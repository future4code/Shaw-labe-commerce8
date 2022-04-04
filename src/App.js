import React from 'react';
import styled from 'styled-components'
import Home from './Components/Home/Home'
import CardProduto from './Components/CardProduto/CardProduto';
import Carrinho from './Carrinho/Carrinho'
import Images from './img/Images'

const MainContainer = styled.div`
   display:grid;
   grid-template-columns: 20vw 60vw 20vw;
  

    background-color:black;
    color:white;
`

const FilterList = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center

`

const FilterContainer = styled.div`
   display:flex;
   flex-direction: column;
   grid-column: 1/2;
    div {
        margin: 8px;
        margin-top: 20px;
        padding-top: 20px;
        font-family: Arial, Helvetica, sans-serif
    }

    h3{
       text-align:center;
    }

    label{
        
        margin-left: 10px
    }

    input{
        margin-top:10px;
        width:120px;
        height: 20px ;
        text-align:center;


        
    }
`



const DisplayProdutos = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 450px;
    grid-column: 2/3;
`
const ListaProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`

class App extends React.Component {
    state = {
        produtos: [{
            id: 1,
            nome: "Balões metálicos",
            valor: 15.0,
            imageUrl: Images.balao,
        },
        {
            id: 2,
            nome: "Bonecos Astronautas",
            valor: 27.0,
            imageUrl: Images.bonecoAstro,
        },
        {
            id: 3,
            nome: "Miniaturas de Foguetes",
            valor: 24.0,
            imageUrl: Images.bonecoFoguete,
        },
        {
            id: 4,
            nome: "Capa para Celular",
            valor: 12.0,
            imageUrl: Images.capaCelular,
        },
        {
            id: 5,
            nome: "Conjunto Colar de Casal Magnético",
            valor: 16.0,
            imageUrl: Images.colar,
        },
        {
            id: 6,
            nome: "Luminária Globo Estrelas",
            valor: 42.0,
            imageUrl: Images.luminaria,
        },
        {
            id: 7,
            nome: "Cordão com Luzes Tema Espacial",
            valor: 39.0,
            imageUrl: Images.luzes,
        },
        {
            id: 8,
            nome: "Mochila Infantil Espaço",
            valor: 69.0,
            imageUrl: Images.mochilaEspaco,
        },
        {
            id: 9,
            nome: "Mochila para Pets",
            valor: 340.0,
            imageUrl: Images.mochilaPet,
        }],
        ordem: '',
        pesquisa: "",
        valorMinimo: "",
        valorMaximo: "",
        produtosNoCarrinho: []
    }

    adicionarProdutoNoCarrinho = (idProduto) => {
        const produtoNoCarrinho = this.state.produtosNoCarrinho.find(produto => idProduto === produto.id)
        if (produtoNoCarrinho) {
            const novaListaCarrinho = this.state.produtosNoCarrinho.map(produto => {
                if (idProduto === produto.id) {
                    return {
                        ...produto,
                        quantidade: produto.quantidade + 1
                    }
                }
                return produto
            })
            this.setState({ produtosNoCarrinho: novaListaCarrinho })
        } else {
            const produtoParaAdicionar = this.state.produtos.find(produto => idProduto === produto.id)
            console.log(produtoParaAdicionar);
            console.log('idproduto', typeof idProduto);
            console.log('idproduto', idProduto);

            const novaListaCarrinho = [...this.state.produtosNoCarrinho, { ...produtoParaAdicionar, quantidade: 1 }]
            this.setState({ produtosNoCarrinho: novaListaCarrinho })
            console.log(this.state.produtosNoCarrinho);
        }
    }

    removerProdutoDoCarrinho = (idProduto) => {
        const novaListaCarrinho = this.state.produtosNoCarrinho.map((produto) => {
            if (idProduto === produto.id) {
                return {
                    ...produto,
                    quantidade: produto.quantidade - 1
                }
            }
            return produto
        }).filter((produto) => produto.quantidade > 0)

        this.setState({ produtosNoCarrinho: novaListaCarrinho })
    }

    onChangeOrdem = (event) => {
        this.setState({ ordem: event.target.value })
    }

    onChangeValorMinimo = (event) => {
        this.setState({
            valorMinimo: event.target.value
        })
    }
    onChangeValorMaximo = (event) => {
        this.setState({
            valorMaximo: event.target.value
        })
    }
    onChangePesquisa = (event) => {
        this.setState({
            pesquisa: event.target.value
        })
    }


    render() {
        const ordenaProdutos = () => {
            let listaOrdenada
            switch (this.state.ordem) {
                case 'crescente':
                    listaOrdenada = this.state.produtos.sort((a, b) => a.valor - b.valor)
                    break;
                case 'decrescente':
                    listaOrdenada = this.state.produtos.sort((a, b) => b.valor - a.valor)
                    break;
                case 'nomeAZ':
                    listaOrdenada = this.state.produtos.sort((a, b) => {
                        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
                            return 1
                        } else if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
                            return -1
                        } else {
                            return 0
                        }
                    })
                    break;
                case 'nomeZA':
                    listaOrdenada = this.state.produtos.sort((a, b) => {
                        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
                            return -1
                        } else if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
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

        const listaFiltrada = ordenaProdutos().filter(produto => {
            return produto.nome.toLocaleLowerCase().includes(this.state.pesquisa.toLocaleLowerCase())

        }).filter(produto => {
            return this.state.valorMinimo === "" || produto.valor >= this.state.valorMinimo

        }).filter(produto => {
            return this.state.valorMaximo === "" || produto.valor <= this.state.valorMaximo
        })


        return (
            <MainContainer>
                <FilterContainer>
                    <FilterList>
                        <h3>Filtro</h3>
                        <label>Valor mínimo:</label>
                        <input
                            type="number"
                            placeholder="Valor mínimo"
                            valor={this.state.valorMinimo}
                            onChange={this.onChangeValorMinimo}
                        />
                    </FilterList>
                    <FilterList>
                        <label>Valor máximo:</label>
                        <input
                            type="number"
                            placeholder="Valor máximo"
                            valor={this.state.valorMaximo}
                            onChange={this.onChangeValorMaximo}
                        />
                    </FilterList>
                    <FilterList>
                        <label>Buscar nome:</label>
                        <input
                            placeholder="Pesquisa"
                            valor={this.state.pesquisa}
                            onChange={this.onChangePesquisa}
                        />
                    </FilterList>
                </FilterContainer>
                <DisplayProdutos>

                    <Home produtos={this.state.produtos} changeOrdem={this.onChangeOrdem} />
                    <ListaProdutos>

                        {listaFiltrada.map(produto => {
                            return (<CardProduto
                                key={produto.id}
                                idProduto={produto.id}
                                imgURL={produto.imageUrl}
                                nomeProduto={produto.nome}
                                preco={produto.valor}
                                addCarrinho={this.adicionarProdutoNoCarrinho} />)
                        })}
                    </ListaProdutos>
                </DisplayProdutos>
                <div>
                    <Carrinho
                        produtosNoCarrinho={this.state.produtosNoCarrinho}
                        removerProdutoDoCarrinho={this.removerProdutoDoCarrinho}
                    />
                </div>
            </MainContainer>
        )
    }
}

export default App;
