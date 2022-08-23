import React from "react";

const CartItem = (props) => {

    const { price, title, qty } = props.product;

    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img src="" alt="" style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: "#777" }}>Rs {price}</div>
                <div style={{ color: "#777" }}>{qty}</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png"
                        alt="increase"
                        className="actions-icons"
                        onClick={()=> onIncreaseQuantity(props.product)}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/7080/7080604.png"
                        alt="decrease"
                        className="actions-icons"
                        onClick={()=> onDecreaseQuantity(props.product)}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1632/1632602.png"
                        alt="delete"
                        className="actions-icons"
                        onClick={()=> onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
    
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc",
    },
};

export default CartItem;
