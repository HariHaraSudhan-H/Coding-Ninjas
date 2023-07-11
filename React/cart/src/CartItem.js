import React from "react";
const CartItem = (props) => {
        // console.log(this.props);
        const {price,title,qty,img} = props.product;
        const {product,increaseQty,decreaseQty,deleteItem} = props;
        return (
            <div className="cart-item">
                <div className="leftblock">
                    <img style={styles.image} src={img} alt=""/>
                </div>
                <div className="rightblock">
                    <div>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qty: {qty}</div>
                    <div className="cart-items-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://img.icons8.com/?size=512&id=24717&format=png" onClick={()=>{increaseQty(product)}}/>
                        <img alt="decrease" className="action-icons" src="https://img.icons8.com/?size=512&id=1504&format=png" onClick={()=>{decreaseQty(product)}}/>
                        <img alt="delete" className="action-icons" src="https://img.icons8.com/?size=512&id=8329&format=png" onClick={()=>{deleteItem(product.id)}}/>
                    </div>
                </div>
            </div>
        )
    // increaseQty= ()=>{
    //     console.log(this.state);
    //     // this.state.qty++;
    //     this.setState({
    //         qty: ++this.props.product.qty
    //     })
    // }

    // decreaseQty = ()=>{

    //     if(this.state.qty==0){
    //         return;
    //     }
    //     this.setState({
    //         qty: --this.state.qty
    //     })
    // }

    // deleteItem = ()=>{
    //     this.setState((prevState)=>{
    //         return {
    //             qty: 0
    //         }
    //     })
    // }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;