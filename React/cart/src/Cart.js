import React from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
    function getTotalPrice(){
        const {products} = props;
        let totalPrice = 0;
        products.forEach(product => {
            totalPrice+=(product.qty*product.price)
        });
        return totalPrice;
    }
    const { products, handleIncreaseQty, handleDecreaseQty, handleDeleteItem } = props;
    return (
        <div className="Cart">
            {products.map((product) => {
                return <CartItem
                    product={product}
                    key={product.id}
                    increaseQty={handleIncreaseQty}
                    decreaseQty={handleDecreaseQty}
                    deleteItem={handleDeleteItem}
                />
            })}

            <span style={{padding:10, fontSize:20} }>Total Price = Rs. {getTotalPrice()}</span>
        </div>
    )


}

export default Cart;