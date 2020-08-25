import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    constructor(){
        super();
        this.state={
        product:[
            {
            price: 999,
            title: 'Phone',
            Qty : 1,
            img : '',
            id :1
          },
          {
            price: 999,
            title: 'Watch',
            Qty : 10,
            img : '',
            id :2
          },
          {
            price: 999,
            title: 'Laptop',
            Qty : 12,
            img : '',
            id :3
          }
    ]
      }
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

    render(){

        return(
            <div className="cart">
                
                {this.state.product.map((products) =>{
                    return (
                    <CartItem 
                     product={products} 
                     key={products.id}
                     onIncrease={this.increaseQty}
                     onDecrease={this.decreaseQty}
                     onDelete={this.deleteProduct}
                     />);
                })}
            </div>
        );

    }

    

   
    }


export default Cart;