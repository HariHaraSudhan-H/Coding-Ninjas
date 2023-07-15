import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
// import * as firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading:true
    }
    this.db = firebase.firestore()
  }

  componentDidMount() {
    // firebase.firestore().collection('products').get()
    // .then((snapshot)=>{
    //   console.log(snapshot);
    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data());
    //   })

    //   let products = snapshot.docs.map((docs)=>{
    //     let data = docs.data();
    //     data['id'] = docs.id;
    //     return data;
    //   })

    //   this.setState({products,loading:false});
    // })
    firebase.firestore().collection('products')
    .onSnapshot((snapshot)=>{
      console.log(snapshot);
      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })

      let products = snapshot.docs.map((docs)=>{
        let data = docs.data();
        data['id'] = docs.id;
        return data;
      })

      this.setState({products,loading:false});
    });
    
  }
  handleIncreaseQty = (product) => {
    // console.log('INcreasing qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({ products: products });

    const docRef = this.db.collection('products').doc(product.id);
    docRef.update({
      qty: product.qty+1
    })
    .then(()=>{
      console.log('Qty Increased');
    })
    .catch(()=>{
      console.log('error');
    })
  }

  handleDecreaseQty = (product) => {
    // console.log('Decreasing qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    // if (products[index].qty-1 === 0) {
    //   this.handleDeleteItem(products[index].id);
    //   return;
    // }
    // products[index].qty -= 1;

    this.setState({ products: products });

    const docRef = this.db.collection('products').doc(product.id);
    if(product.qty-1===0){
      this.handleDeleteItem(product.id);
      return;
    }
    docRef.update({
      qty: product.qty-1
    })
    .then(()=>{
      console.log('Qty Decreased');
    })
    .catch(()=>{
      console.log('error');
    })
  }

  handleDeleteItem = (id) => {
    // console.log('deleting')
    const { products } = this.state;
    // const items = products.filter((item) => item.id != id);

    // this.setState({ products: items });

    const docRef = this.db.collection('products').doc(id);

    docRef.delete()
    .then(()=>{
      console.log('Deleted');
    })
    .catch(()=>{
      console.log('error');
    })
  }

  getProductCount() {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += (product.qty);
    })

    return count;
  }

  addProduct= ()=>{
    this.db.collection('products')
    .add({
      img:'',
      qty:3,
      price:900,
      title:'Washing Machine'
    })
    .then((docRef)=>{
      console.log('Product has been added',docRef);
    })
    .catch((error)=>{
      console.log('error',error);
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar productCount={this.getProductCount()} />
        <h1>Cart</h1>
        {this.state.loading && <h1>Loading products..</h1>}
        <Cart products={this.state.products}
          handleIncreaseQty={this.handleIncreaseQty}
          handleDecreaseQty={this.handleDecreaseQty}
          handleDeleteItem={this.handleDeleteItem} />
        <button onClick={this.addProduct}>Add Product</button>
      </div>
    );
  }

}

export default App;
