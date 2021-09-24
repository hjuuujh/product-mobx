import React, { Component } from 'react';
import {observer} from 'mobx-react';
import ProductStore from '../store/ProductStore';

class ProductRowView extends Component {
    render() {
        const {product} = this.props;
        return (
            <tr onClick={(e) => ProductStore.handleSelected(product.id)}>
                <td>{product.stocked ? product.name: (<span style={{color:'red'}}>{product.name}</span>)}</td>
                <td>${product.price}</td>
            </tr>
        );
    }
}

export default observer(ProductRowView);