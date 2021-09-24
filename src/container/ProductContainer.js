import React, { Component } from 'react';
import ProductCategoryRowView from '../view/ProductCategoryRowView';
import ProductRowView from '../view/ProductRowView';

import {observer} from 'mobx-react';
import ProductStore from '../store/ProductStore';

class ProductContainer extends Component {
    productStore = ProductStore;
    render() {
        // <ProductCategoryRowView />
        // <ProductRowView />
        const rows = []
        let lastCategory = null;
        const {filterText, inStockOnly, products} = this.productStore;
        products.forEach(product => {
            if(product.name.indexOf(filterText) === -1) return;
            if(inStockOnly && !product.stocked) return;
            if(product.category !== lastCategory){
                rows.push(<ProductCategoryRowView category={product.category} key={product.category}/>)
            }
            rows.push(<ProductRowView product={product} key={product.id}/>)
            lastCategory = product.category;
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default observer(ProductContainer);