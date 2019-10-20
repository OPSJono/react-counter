import React, { Component } from "react";
import Counter from "./counter";

class Cart extends Component {
  render() {
    return (
      <div className="card card-primary m-5">
        <div className="card card-header">
          <h4>
            Shopping Cart <span className="badge badge-secondary badge-sm">{this.props.renderTotalCount()}</span>
          </h4>
        </div>
        <div className="card card-body">{this.renderItems()}</div>
      </div>
    );
  }

  renderItems() {
    const { items } = this.props.cart;

    if (items.length === 0) {
      return <p>There are no items in your shopping cart.</p>;
    }

    return (
      <ul>
        {items.map(item => (
          <Counter
            key={item.id}
            product={item}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Cart;
