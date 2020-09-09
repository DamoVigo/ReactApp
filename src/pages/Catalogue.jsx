import React from 'react';
import { categories, products } from '../data'
import Sidebar from '../components/Sidebar';
import ProductsList from '../components/ProductsList';

class Catalogue extends React.Component {
    catId = null
    constructor(props) {
        super(props);
        this.state = {
            categorie: 0,
        }
    }
    handleCategorieChanged = (catId) => {
        console.log("changement" + catId)
        this.setState({ categorie: catId})
    }

    getProductsList = () => {
        const produits = products.filter(
            (products)=> products.category === this.state.categorie 
        );
        return produits
    }
    render() {
        const productList = this.getProductsList();
        return (
            <div className="row">
                <div className="col-sm-2">
                    <Sidebar
                        items={categories}
                        onCategorieChanged={(catId) => this.handleCategorieChanged(catId)}
                    />
                </div>
                <div className="col-sm">
                    listeprod {this.state.categorie}
                    <ProductsList items={productList}/>
                </div>
            </div>
        );
    }
}

export default Catalogue;