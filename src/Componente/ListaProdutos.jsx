import React, { Component } from 'react';
import { Button, Container, Row, Table } from 'react-bootstrap';
import ProdutoServiço from '../Serviços/ProdutoServiço';

class ListaProdutos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produto: []
        }

        this.voltar = this.voltar.bind(this);
        this.editar = this.editar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.novo = this.novo.bind(this);
    }

    componentDidMount() {
        this.getProdutos();
    }

    getProdutos() {
        ProdutoServiço.getProdutos().then(
            (resposta) =>
                this.setState({ produto: resposta.data })
        );
    }

    voltar() {
        this.props.history.push("/");
    }

    excluir(id) {
        ProdutoServiço.deleteProduto(id).then(
            res => {
                alert(res.data);
                this.getProdutos();
            });
    }

    editar(id) {
        this.props.history.push("/addprod/" + id);
    }

    novo() {
        this.props.history.push("/addprod/_add")
    }
    render() {
        return (
            <Container>
                <Row>
                    <h1>Lista de Produtos</h1>
                </Row>
                <Row>
                    <Button variant="link" onClick={this.voltar}>Voltar</Button>
                </Row>
                <Row>
                    <Table striped bordered hover size="sm">
                        <tr>
                            <th>
                                Nome
                            </th>
                            <th>
                                Descrição
                            </th>
                            <th>
                                Valor
                            </th>
                            <th>
                                Ações
                            </th>
                        </tr>
                        <tbody>
                            {
                                this.state.produto.map(
                                    produto =>
                                        <tr key={produto.idprodutos}>
                                            <td>
                                                {produto.nome}
                                            </td>
                                            <td>
                                                {produto.descricao}
                                            </td>
                                            <td>
                                                {produto.valor}
                                            </td>
                                            <td>
                                                <Button variant="outline-waring" onClick={() => this.editar(produto.idprodutos)}>Editar</Button>
                                                <Button variant="outline-danger" onClick={() => this.excluir(produto.idprodutos)}>Excluir</Button>

                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row className="float-right">
                    <Button variant="outline-secondary" onClick={() => this.novo()}>Novo Produto</Button>
                </Row>
            </Container>
        );
    }
}

export default ListaProdutos;