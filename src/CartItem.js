import React from 'react';

class CartItem extends React.Component{

    render(){

        return(

            <div className="cart-item">

                <div className="left-block">

                    <img alt="" style={styles.image} />

                </div>
                <div className="right-block">
                    <div>Phone</div>
                    <div>Rs 99</div>
                    <div>Qyt: 1</div>
                    <div className="cart-item-actions">

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