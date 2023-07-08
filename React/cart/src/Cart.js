import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    render() {
        const { products } = this.state;
        return (
            <div className="Cart">
                {products.map((product) => {
                    return <CartItem 
                    product={product} 
                    key={product.id} 
                    increaseQty={this.handleIncreaseQty} 
                    decreaseQty={this.handleDecreaseQty}
                    deleteItem={this.handleDeleteItem}
                    />
                })}
            </div>
        )
    }

    handleIncreaseQty = (product) => {
        console.log('INcreasing qty');
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;

        this.setState({products:products});
    }

    handleDecreaseQty = (product) => {
        console.log('Decreasing qty');
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty-=1;

        this.setState({products:products});
    }

    handleDeleteItem = (id)=>{
        const {products} = this.state;
        const items = products.filter((item)=> item.id!=id);

        this.setState({products:items});
    }
}

export default Cart;