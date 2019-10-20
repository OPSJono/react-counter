import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./components/navbar";
import Cart from "./components/cart";

class App extends Component {
  state = {
    cart: {
      count: 0,
      items: []
    },
    products: []
  };

  //   constructor() {
  //     super();
  //   }

  componentDidMount = () => {
    // Ajax call to load available items into the main view.
    const products = [
      { id: 1, name: "Orange", count: 10 },
      { id: 2, name: "Apple", count: 4 },
      { id: 3, name: "Banana", count: 5 },
      { id: 4, name: "Pear", count: 100 }
    ];

    // Ajax/cookies to load items into the current cart.
    const cart = {
      items: [
        { id: 1, name: "Orange", count: 0 },
        { id: 2, name: "Apple", count: 0 },
        { id: 3, name: "Banana", count: 0 },
        { id: 4, name: "Pear", count: 0 }
      ]
    };

    this.setState({ products });
    this.setState({ cart });
  };

  renderTotalCount = () => {
    const { items } = this.state.cart;

    const count = items.filter(item => item.count > 0).length;

    return count;
  };

  handleIncrement = product => {
    let items = [...this.state.cart.items];
    const index = items.indexOf(product);

    items[index].count++;
    const cart = { items };

    this.setState({ cart });
  };

  handleDecrement = product => {
    let items = [...this.state.cart.items];
    const index = items.indexOf(product);

    items[index].count--;
    const cart = { items };

    this.setState({ cart });
  };

  handleDelete = product => {
    const items = [...this.state.cart.items].filter(item => item.id !== product.id);
    const cart = { items };

    this.setState({ cart });
  };

  handleAdd = product => {
    let items = [...this.state.cart.items];

    // TODO: If item already in cart, increment count by 1.
    // TODO: Be able to choose how many of an item to add to the cart.
    const item = { id: product.id, name: product.name, count: 1 };

    items.push(item);

    const cart = { items };

    this.setState({ cart });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 col-lg-6">
              <p>Items to add to cart go here!</p>
            </div>
            <div className="col-4 col-lg-6">
              <Cart
                cart={this.state.cart}
                renderTotalCount={this.renderTotalCount}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
