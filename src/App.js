import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as  firebase from 'firebase';

class App extends React.Component {

  constructor(){
    super();
    this.state={
    product:[]
  }
}

componentDidMount(){

  firebase
  .firestore()
  .collection('products')
  .get()
  .then((snapshot) =>{

    const products=snapshot.docs.map((doc) =>{

             const data=doc.data();
             data['id']=doc.id;
             return data;
    });

    this.setState({
      product: products
    })
  });
}

increaseQty = (produc) =>{
    const {product}=this.state;
    const index = product.indexOf(produc);
    product[index].Qty+=1;

    this.setState({
        product
    });

}
decreaseQty = (produc) =>{
    const {product}=this.state;
    const index = product.indexOf(produc);
    if(product[index].Qty>0)
    product[index].Qty-=1;

    this.setState({
        product
    });
}

deleteProduct = (id) => {
    const {product}=this.state;
    const item=product.filter((item) => item.id !==id);

    this.setState({
        product: item
    });
}

getCartCount=() =>{

  const {product}=this.state;
  let count=0;

  product.forEach((product) =>{
     count+=product.Qty;
  });
  return count;

}

getCartTotal = () =>{
  const {product}=this.state;
  let total=0;

  product.forEach((product) =>{
     total+=product.Qty*product.price;
  });
  return total;

}

  render(){

    const {product}=this.state;
  return (
    <div className="App">
       <Navbar
         count={this.getCartCount()}
       />
       <Cart
       products={product} 
       key={product.id}
       onIncrease={this.increaseQty}
       onDecrease={this.decreaseQty}
       onDelete={this.deleteProduct} 
       />
       <div><h3 style={{padding: 20, fontSize:20}}>Total : {this.getCartTotal()}</h3></div>
    </div>
  );
  }
}

export default App;
