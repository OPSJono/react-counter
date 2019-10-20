import React, { Component } from "react";
import Counter from "./counter";

class Cart extends Component {
  state = {
    items: []
  };

  //   constructor() {
  //     super();
  //   }

  componentDidMount = () => {
    // Ajax call to load items into the cart
    const items = [
      { id: 1, name: "Orange", count: 1 },
      { id: 2, name: "Apple", count: 1 },
      { id: 3, name: "Banana", count: 1 },
      { id: 4, name: "Pear", count: 1 }
    ];

    this.setState({ items });
  };

  renderTotalCount = () => {
    const { items } = this.state;

    let count = 0;

    items.forEach(function(value, index) {
      if (value.count > 0) {
        count++;
      }
    });

    return count;
  };

  handleIncrement = product => {
    let items = [...this.state.items];
    const index = items.indexOf(product);

    items[index].count++;

    this.setState({ items });
  };

  handleDecrement = product => {
    let items = [...this.state.items];
    const index = items.indexOf(product);

    items[index].count--;

    this.setState({ items });
  };

  handleDelete = product => {
    const items = [...this.state.items].filter(item => item.id !== product.id);

    this.setState({ items });
  };

  render() {
    return (
      <React.Fragment>
        <div className="card card-primary m-5">
          <div className="card card-header">
            <h4>
              Shopping Cart <span className="badge badge-secondary badge-sm">{this.renderTotalCount()}</span>
            </h4>
          </div>
          <div className="card card-body">{this.renderItems()}</div>
        </div>
      </React.Fragment>
    );
  }

  renderItems() {
    const { items } = this.state;

    if (items.length === 0) {
      return <p>There are no items in your shopping cart.</p>;
    }

    return (
      <ul>
        {items.map(item => (
          <Counter
            key={item.id}
            product={item}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Cart;
