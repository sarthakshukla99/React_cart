import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
    }

    increaseQuantity= ()=>{
        // console.log(this.state.qty++);
        this.setState({
            qty: this.state.qty+1
          }, () => {console.log(this.state);});
          
    }

    decreaseQuantity= () => {
        // this.setState((prevState) => {
        //     return {
        //         qty: prevState - 1
        //     }
        // })

        if(this.state.qty !== 0){
            this.setState({
                qty: this.state.qty - 1
            })
        }
    }

    render() {
        const { price, title, qty } = this.props.product;
        console.log('this.props', this.props)
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
                            onClick={this.increaseQuantity}
                        />
                        <img
                            src="https://cdn-icons.flaticon.com/png/128/2569/premium/2569198.png?token=exp=1661013092~hmac=05fc70f7797ec60f1b4db2046fe8557a"
                            alt="decrease"
                            className="actions-icons"
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1632/1632602.png"
                            alt="delete"
                            className="actions-icons"
                        />
                    </div>
                </div>
            </div>
        );
    }
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
