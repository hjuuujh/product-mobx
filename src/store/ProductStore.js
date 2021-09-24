import { makeAutoObservable } from "mobx";
import Products from '../Products';

class ProductStore{
    products = Products;
    selectedProduct = [];
    filterText = "";
    inStockOnly = false;
    name= "";
    category = "";
    price = "";
    stocked = false;
    id = -1;
    selected = -1;

    constructor(){
        makeAutoObservable(this);
        this.id = this.products[this.products.length-1].id+1;
    }

    handlerFilterTextChange(filterText){
        this.filterText = filterText;
    }

    handleCreateNameChange(name){
        this.name = name;
    }

    handleCreateCategoryChange(category){
        this.category = category;
    }

    handleCreatePriceChange(price){
        this.price = price;
    }

    handlerCreateStockChange(stocked){
        this.stocked  = stocked ;
    }

    handlerInStockChange(inStockChange){
        this.inStockOnly = inStockChange;
    }

    handleCreate = () => {
        this.id = this.products[this.products.length-1].id+1;
        this.products = this.products.concat({
            id: this.id,
            name: this.name,
            category: this.category,
            price : this.price,
            stocked : this.stocked
          });

          this.clear();
    }

    handleSelected (id){
        this.selected = id;

        this.selectedProduct =  this.products.find(product => product.id === this.selected);
        this.name = this.selectedProduct.name;
        this.category = this.selectedProduct.category;
        this.price = this.selectedProduct.price;
        this.stocked = this.selectedProduct.stocked;
    }
    
    handleRemove= () => {
        this.products = this.products.filter(product => product.id !== this.selected);
        this.clear();
    }

    handleModify = () => {
        this.selectedProduct.name = this.name;
        this.selectedProduct.category = this.category;
        this.selectedProduct.price = this.price;
        this.selectedProduct.stocked = this.stocked;
    }

    clear = () =>{
        this.name = "";
        this.category = "";
        this.price = "";
        this.stocked = false;
    }
}

export default new ProductStore();