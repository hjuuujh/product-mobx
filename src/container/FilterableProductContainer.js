import React, { Component } from 'react';
import CrudContainer from './CrudContainer';
import ProductContainer from './ProductContainer';
import SearchBarContainer from './SearchBarContainer';

class FilterableProductContainer extends Component {
    render() {
        return (
            <div>
                <CrudContainer />
                <SearchBarContainer />
                <ProductContainer />
            </div>
        );
    }
}

export default FilterableProductContainer;