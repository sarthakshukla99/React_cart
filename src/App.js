import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: "Watch",
                    qty: 1,
                    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                    id: 1,
                },
                {
                    price: 999,
                    title: "Mobile Phone",
                    qty: 8,
                    img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                    id: 2,
                },
                {
                    price: 22999,
                    title: "Laptop",
                    qty: 4,
                    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                    id: 3,
                },
            ],
        };
    }

    handleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        // const obj1 = {name: 'sarthak', lastname: 'shukla', rollNo: 22}
        // const lName = obj1.lastname;
        // console.log(lName);
        // const {name} = obj1
        // console.log(name)
        products[index].qty += 1;
        
        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty !== 0){
            products[index].qty -= 1;
        }

        this.setState({
            products
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id );  

        this.setState({
            products: items
        })
    }

    getCartCount=()=>{
        const {products} = this.state;

        let count = 0;

        products.forEach((product) => {
            count += product.qty
        })
        return count
    }

    getCartTotal= () => {
        const {products} = this.state;

        let cartTotal = 0;

        products.map((product) => {
            cartTotal = cartTotal + product.qty * product.price
        });

        return cartTotal
    }


    render(){
        const { products } = this.state;
        return (
            <div className="App">
                <Navbar count={this.getCartCount()}/>
                <Cart  
                    products={products}
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}   
                />

                <div>TOTAL: {this.getCartTotal()}</div>

            </div>
        );
    }
}

export default App;