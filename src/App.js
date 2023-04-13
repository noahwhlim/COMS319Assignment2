import React, { useState, useEffect } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import items from "./products_json.json"
import {Products} from "./Products.js"
import Confirmation from "./Confirmation"


const App = () => {
  const [ProductsCategory, setProductsCategory] = useState(Products);
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [showShop, setShowShop] = useState(1);


  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
        totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };  

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let itemFound = false;
    const updatedCart = cart.filter((cartItem) => {
      if (cartItem.id === el.id && !itemFound) {
        itemFound = true;
        return false;
      }
      return true;
    });
    if (itemFound) {
      setCart(updatedCart);
    }
  };

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  } 

  const cartItems = cart.map((el) => (
    // <div key={el.id}>
    //     <img class="img-fluid" src={el.image} width={30} />
    //     {el.title} ${el.price}
    //     <hr/>
    // </div>

    <div className='category-section fixed'>
        
        <div className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10" style={{ maxHeight: '800px'}}>
        <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img
                src={el.image}
                className="img-fluid rounded-3" alt={el.description} />
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3">
              <h6 className="text-muted">{el.title}</h6>
              <h6 className="text-black mb-0">{el.title}</h6>
            </div>

            <div class="col">
              ${el.price}
              
            </div>
            </div>
        </div>
      </div>
  )); 

  const handleChange = (e) => {
    setQuery(e.target.value);
    // console.log("Step 6 : in handleChange, Target Value :",e.target.value,"  Query Value :",query);
    const results = Products.filter(eachProduct =>{
    if (e.target.value === "") return ProductsCategory;
      return eachProduct.title.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setProductsCategory(results);
  }

  const render_products = (ProductsCategory) => {
    return (
      <div className='category-section fixed'>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">Products ({ProductsCategory.length})</h2>
        <div className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10" style={{ maxHeight: '800px'}}>
          {ProductsCategory.map((el, index) => (
            <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img
                src={el.image}
                className="img-fluid rounded-3" alt={el.description} />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <h6 className="text-muted">{el.title}</h6>
              <h6 className="text-black mb-0">{el.title}</h6>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button
                type="button"
                variant="light"
                onClick={() => removeFromCart(el)}
              >
                {" "}
                -{" "}
              </button>{" "}
              <button type="button" variant="light" onClick={() => addToCart(el)}>
                {" "}
                +{" "}
              </button>
            </div>
      
            <div class="col">
              ${el.price} <span class="close">&#10005;</span>
              {howManyofThis(el.id)}
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  }

  const ShopView = (prop) => {
    if (showShop == 1) {
      return(
        <div className="p-5">
          
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h1 className="fw-bold mb-0 text-black">Shop View</h1>
            <input
              className="mr-5"
              placeholder="Search"
              type="search"
              value={query}
              onChange={handleChange}
            />
            <h6 className="mb-0 text-muted">{cart.length} items</h6>
          </div>
          {render_products(ProductsCategory)}
        </div>
      );
    }
    else {
      return (
        
        <div className="p-5">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h1 className="fw-bold mb-0 text-black">Cart View</h1>
            
            <input
              className="mr-5"
              placeholder="Search"
              type="search"
              value={query}
              onChange={handleChange}
            />
            <h6 className="mb-0 text-muted">{cart.length} items</h6>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">Cart ({cart.length})</h2>
          {cartItems}
          
          <div className="d-flex justify-content-between align-items-right mb-5">
            <Confirmation cart = {cart}/>
          </div>
          
        </div>
      )
    }
  }



  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                      
                      <ShopView show="1"/>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>


                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">{cart.length} items</h5>
                        <h5>${cartTotal.toFixed(2)}</h5>
                      </div>


                      <button class="btn btn-dark btn-block" variant="primary" onClick={() => setShowShop(0)}>Show Cart</button>
                      <button class="btn btn-dark btn-block" variant="primary" onClick={() => setShowShop(1)}>Show Shop</button>
                      

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
