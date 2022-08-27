import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"
import firebase from 'firebase/compat/app';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            products: [],
            loading: true
        };
        this.db = firebase.firestore();
    }

    componentDidMount (){
        firebase
            .firestore()
            .collection('products')
            // .get()
            .onSnapshot((snapshot)=>{
                const products = snapshot.docs.map((doc )=> {
                    const data = doc.data();
          
                    data["id"] = doc.id;
                   
                    return data;
                  })
                 
                  this.setState({ products: products,loading:false });
            })
    }

    handleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        // const obj1 = {name: 'sarthak', lastname: 'shukla', rollNo: 22}
        // const lName = obj1.lastname;
        // console.log(lName);
        // const {name} = obj1
        // console.log(name)
        // products[index].qty += 1;
        
        // this.setState({
        //     products
        // })

        const docRef = this.db.collection('products').doc(products[index].id);

        docRef.update({
            qty: products[index].qty+1
        })
        .then(() => {
            console.log('Updated Successfully');
        })
        .catch((err) => {
            console.log('error=> ', err);
        })
    }

    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return
        }
        // products[index].qty -= 1;

        // this.setState({
        //     products
        // })

        const docRef = this.db.collection('products').doc(products[index].id);

        docRef.update({
            qty: products[index].qty-1
        })
        .then(() => {
            console.log('Updated Successfully');
        })
        .catch((err) => {
            console.log('error=> ', err);
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;

        // const items = products.filter((item) => item.id !== id );  

        // this.setState({
        //     products: items
        // })

        const docRef = this.db.collection('products').doc(id);
        docRef.delete().then(() => {
            console.log('deleted successfully');
        }).catch((err) => {
            console.log('error==> ',err);
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

    addProduct = () => {
        this.db
            .collection('products')
            .add({
                img: "",
                price: 900,
                qty: 3,
                title: 'washing machine'
            })
            .then((docRef) => {
                console.log("product has been added ",docRef);
            })
            .catch((err) => {
                console.log('error=>', err);
            })
    }

    render(){
        const { products, loading } = this.state;
        return (
            <div className="App">
                <Navbar count={this.getCartCount()}/>
                {/* <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add a Product</button> */}
                <Cart  
                    products={products}
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}   
                />
                {loading && <h1>Loading Products...</h1>}
                <div>TOTAL: {this.getCartTotal()}</div>

            </div>
        );
    }
}

export default App;