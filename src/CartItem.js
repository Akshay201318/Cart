import React from 'react';

class CartItem extends React.Component{

    render(){
        const {price, title, Qty, img}=this.props.product;

        return(
              

            <div className="cart-item">

                <div className="left-block">

                    <img alt="" style={styles.image} />

                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qyt: {Qty}</div>
                    <div className="cart-item-actions">

                        <img alt="Increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" onClick={() => this.props.onIncrease(this.props.product)}/>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/659/659892.svg" onClick={() => this.props.onDecrease(this.props.product)}/>
                        <img alt="Delete" className="action-icons" src="https://image.flaticon.com/icons/svg/3096/3096673.svg" onClick={() => this.props.onDelete(this.props.product.id)}/>

                    </div>

                </div>
            </div>

        );
    }
}
const styles={
    image:{
        height:110,
        width:120,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;