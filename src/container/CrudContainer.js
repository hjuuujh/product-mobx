import React, { Component } from 'react';
import {observer} from 'mobx-react';
import ProductStore from '../store/ProductStore';

class CrudContainer extends Component {
    productStore = ProductStore;
    render() {
        return (
            <div>
                <br/>
                <div className="create">
                    <input type="text" placeholder="Name..."
                    value = {this.productStore.name}
                    onChange={(e)=>this.productStore.handleCreateNameChange(e.target.value)}/>
                    <input type="text" placeholder="Price..."
                    value = {this.productStore.price}
                    onChange={(e)=>this.productStore.handleCreatePriceChange(e.target.value)}/>
                    <input type="text" placeholder="Category..."
                    value = {this.productStore.category}
                    onChange={(e)=>this.productStore.handleCreateCategoryChange(e.target.value)}/>
                    <input type="checkbox" 
                    checked = {this.productStore.stocked}
                    onChange = {(e)=>this.productStore.handlerCreateStockChange(e.target.checked)}/>Stock
                </div>
                <br/>
                <button onClick = {this.productStore.handleCreate}> Add</button>
                <button onClick = {this.productStore.handleModify}>Modify</button>
                <button onClick = {this.productStore.handleRemove}>Remove</button>
                <button onClick = {this.productStore.clear}>Clear</button>
                
            </div>
        );
    }
}

export default observer(CrudContainer);