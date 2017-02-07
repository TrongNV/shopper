import React, 
  { Component } from 'react';
import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import {items} from './static-data';


class App extends Component {

constructor(props){
  super(props);

  this.state={
    selectedTab:0,
    cart: [],
    total: 0,
    itemCnt: 0
  };
}

handleTabChanged = (index) =>{
  this.setState({
    selectedTab: index
  });
}

handleAddToCart=(item)=>{
  let {cart, total, itemCnt} = this.state;
  let amount = total + item.price;
  let items = itemCnt+1;
  this.setState({
    cart: [...cart, item.id],
    total: amount,
    itemCnt: items
  });
  
  console.log('added to cart +':item.id);
}


handleRemoveFromCart = (item) => {
  let {cart, total, itemCnt} = this.state;
  let id = cart.indexOf(item.id);
  let amount = total - item.price;
  let cnt = itemCnt - 1;
  this.setState({
    cart:[ ...cart.splice(0, id), ...cart.slice(id+1)],
    total: amount,
    itemCnt: cnt
  });
  console.log('removed from cart-': id);
}

  renderContent() {

      switch(this.state.selectedTab){
        default:
        case 0:
        return <ItemPage items={items} onAddToCart={this.handleAddToCart}></ItemPage>;
        case 1:
        return this.renderCart();
      }

  }

  renderCart(){
   
    let itemCounts = 
    this.state.cart.reduce( (itemCounts, itemId)=>{
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

   var keys = Object.keys(itemCounts);
   var cartItems = keys.map((itemId)=>{
    var item = items.find( (item)=>
      item.id === parseInt(itemId,10)
    );

    return ({
      ...item, count: itemCounts[itemId]
    });
   });

    return (<div><CartPage items={cartItems} 
                onAddOne={this.handleAddToCart} onRemoveOne={this.handleRemoveFromCart}>
                </CartPage>
                <div>Total:{this.state.total}</div>
                </div>);

  }


  

  render() {
    let {selectedTab, total, itemCnt} = this.state;
    return (
      <div className="App">
        <Nav selectedTab={selectedTab} total={total} itemCnt={itemCnt} onTabChange={this.handleTabChanged}></Nav>
        <main
          className="App-content">
          {this.renderContent()}
        </main>
        
      </div>
    );
  }
}

export default App;