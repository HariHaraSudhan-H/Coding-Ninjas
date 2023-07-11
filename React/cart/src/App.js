import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
          id: 2
        },
        {
          price: 9999,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
          id: 3
        }
      ]
    }
  }
  handleIncreaseQty = (product) => {
    console.log('INcreasing qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({ products: products });
  }

  handleDecreaseQty = (product) => {
    console.log('Decreasing qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1;

    this.setState({ products: products });
  }

  handleDeleteItem = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id != id);

    this.setState({ products: items });
  }

  getProductCount() {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += (product.qty);
    })

    return count;
  }
  render() {
    return (
      <div className="App">
        <Navbar productCount={this.getProductCount()} />
        <h1>Cart</h1>
        <Cart products={this.state.products}
          handleIncreaseQty={this.handleIncreaseQty}
          handleDecreaseQty={this.handleDecreaseQty}
          handleDeleteItem={this.handleDeleteItem} />
      </div>
    );
  }

}

export default App;
