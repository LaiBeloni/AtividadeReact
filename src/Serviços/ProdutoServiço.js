import axios from "axios";



const urlprodutos= "http://localhost:8080/produto/all";
const urlbase= "http://localhost:8080/produto";

class ProdutoServiços{
    getProdutos(){
        return axios.get(urlprodutos);
    }

    createProduto(produtos){
        return axios.post(urlbase+"/addprod/",produtos);
    }

    getProdutoById(id){
        return axios.get(urlbase+"/locate_by_id/"+id);
    }

    editProduto(produto){
        return axios.put(urlbase+"/update/"+ produto.id, produto);
    }

    deleteProduto(id){
        return axios.delete(urlbase+"/delete_prod/"+id);
    }
}

export default new ProdutoServiços();