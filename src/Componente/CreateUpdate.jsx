import React, { Component } from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import ProdutoServiço from '../Serviços/ProdutoServiço';


class CreateUpdate extends Component {
    constructor(props){
        super(props);
        this.state ={
          id: this.props.match.params.id,
          descricao:"",
          valor:"",
          nome:""
        }
        
        this.changeDescricaoHandler=this.changeDescricaoHandler.bind(this);
        this.changeValorHandler=this.changeValorHandler.bind(this);
        this.changeNomeHandler=this.changeNomeHandler.bind(this);
        this.salvarProduto=this.salvarProduto.bind(this);
    }
    componentDidMount(){
        if(this.state.id === "_add"){
            return false
        } else 
        return ProdutoServiço.getProdutoById(this.state.id).then(
            (res) =>{
                let prod = res.data;
                this.setState({
                    nome : prod.nome,
                    descricao: prod.descricao,
                    valor: prod.valor
                })
            }
        )
    }

    salvarProduto(){
        let produto ={
            nome: this.state.nome,
            descricao: this.state.descricao,
            valor: this.state.valor
        };
        if(this.state.id === "_add"){
        ProdutoServiço.createProduto(produto).then(
            (res) => {
                alert(res.data);
            }
        )
        }else{
            produto.id = this.state.id;
            ProdutoServiço.editProduto(produto).then(
                (res) => console.log(res.data)
            );
        }
        this.props.history.push("/produtos");
    }


    changeDescricaoHandler(event){
        this.setState({descricao: event.target.value})
    }
    changeNomeHandler(event){
        this.setState({nome: event.target.value})
    }
    changeValorHandler(event){
        this.setState({valor: event.target.value})
    }

    cancelar(){
        this.props.history.push("/prod");
    }

    render() {
        return (
            <Container>
                <Row>
                    Cadastro de Produtos
                </Row>
                <Form>
                    <Form.Group controlId="formDescricao">
                        <Form.Control type="text" placeholder="descricao" value={this.state.descricao} onChange={this.changeDescricaoHandler}/>
                        <Form.Text className="text-muted"> Digite a Descrição </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formValor">
                        <Form.Control type="text" placeholder="Valor" value={this.state.valor} onChange={this.changeValorHandler}/>
                        <Form.Text className="text-muted"> Digite o valor </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formTipo">
                        <Form.Control type="text" placeholder="tipo" value={this.state.nome} onChange={this.changeNomeHandler}/>
                        <Form.Text className="text-muted"> Digite o nome </Form.Text>
                    </Form.Group>
                    <Row>
                        <Button variant="sucess" style={{margin: "10 px" }} className="btnSubmit" onClick={this.salvarProduto}>Salvar</Button>
                        <Button variant="warning" style={{margin: "10 px" }} onClick={this.cancelar.bind(this)}>Cancelar</Button>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default CreateUpdate;