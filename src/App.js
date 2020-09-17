// importing all the nessasery files or libraries
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as  firebase from 'firebase';

class App extends React.Component {

  constructor(){
    super();
    this.state={
    product:[],
    loading: true
  }
  this.db=firebase
  .firestore()
}


// fatching data from the firebase

componentDidMount(){

  this.db
  .collection('products')
  .onSnapshot((snapshot) =>{

    const products=snapshot.docs.map((doc) =>{

             const data=doc.data();
             data['id']=doc.id;
             return data;
    });

    this.setState({
      product: products,
      loading:false
    })
  });
}

//increasing the quantity of a particular product in cart
increaseQty = (produc) =>{
    const {product}=this.state;
    const index = product.indexOf(produc);
    
    const docRef= this.db.collection('products').doc(product[index].id);

    docRef
    .update({
      Qty:product[index].Qty +1
    })
    .then(() =>{

    })
    .catch((err) =>{
      console.log("error", err);
    });

}

//decreasing the quantity of a particular product in cart
decreaseQty = (produc) =>{
    const {product}=this.state;
    const index = product.indexOf(produc);
    if(product[index].Qty>0)
    {
    const docRef= this.db.collection('products').doc(product[index].id);

    docRef
    .update({
      Qty:product[index].Qty -1
    })
    .then(() =>{

    })
    .catch((err) =>{
      console.log("error", err);
    });
  }
}
//deleting  a particular product from cart
deleteProduct = (id) => {
    const docRef= this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(() =>{

    })
    .catch((err) =>{
      console.log("error", err);
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
// adding a product to the firebase

addProduct =()=>{

  this.db
  .collection('products')
  .add({
    price:39999,
    Qty:7,
    img:"",
    title:"Laptop"
  })
  .then((docRef) =>{

  })
  .catch((err) =>{
    console.log("error", err);
  });
}

// rendering the react app

  render(){

    const {product, loading}=this.state;
  return (
    <div className="App">
       <Navbar
         count={this.getCartCount()}
       />
       <button onClick={this.addProduct} style={{padding: 20, fontSize:20}}>Add a Poduct</button>
       <Cart
       products={product} 
       key={product.id}
       onIncrease={this.increaseQty}
       onDecrease={this.decreaseQty}
       onDelete={this.deleteProduct} 
       />
       {loading && <h1>Loading Products .....</h1>}
       <div><h3 style={{padding: 20, fontSize:20}}>Total : {this.getCartTotal()}</h3></div>
    </div>
  );
  }
}

export default App;
