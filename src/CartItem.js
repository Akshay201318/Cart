import React from 'react';

const CartItem = (props) =>{

        const {price, title, Qty, img}=props.product;

        return(
              

            <div className="cart-item">

                <div className="left-block">

                    <img alt="" style={styles.image} src={img}/>

                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qyt: {Qty}</div>
                    <div className="cart-item-actions">

                        <img alt="Increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" onClick={() =>props.onIncrease(props.product)}/>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/659/659892.svg" onClick={() =>props.onDecrease(props.product)}/>
                        <img alt="Delete" className="action-icons" src="https://image.flaticon.com/icons/svg/3096/3096673.svg" onClick={() => props.onDelete(props.product.id)}/>

                    </div>

                </div>
            </div>

        );
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