import React from "react";

const CartWidget = () =>{
    return (
        <button type="button" className="btn position-relative">
            <img src="img/cart.png" alt="cart" width="25" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                1
            </span>
        </button>
    )
}

export default CartWidget;