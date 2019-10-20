import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //   }

  getCount = () => {
    let value = "Zero";

    const count = this.props.product.count;

    if (count > 0) {
      value = count;
    }

    return value;
  };

  getBadgeClasses = () => {
    let classes = "m-2 badge badge-";

    if (this.props.product.count === 0) {
      classes += "warning";
    } else {
      classes += "primary";
    }

    return classes;
  };

  getDecrementClasses = () => {
    let classes = "btn btn-secondary btn-sm";

    if (this.props.product.count === 0) {
      classes += " disabled";
    }

    return classes;
  };

  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        <li key={product.id}>
          {product.name}
          <span className={this.getBadgeClasses()}>{this.getCount()}</span>
          <button onClick={() => this.props.onIncrement(product)} className="btn m-2 btn-secondary btn-sm">
            +
          </button>
          <button onClick={() => this.props.onDecrement(product)} className={this.getDecrementClasses()}>
            -
          </button>
          <button onClick={() => this.props.onDelete(product)} className="btn m-2 btn-danger btn-sm">
            Remove
          </button>
        </li>
      </React.Fragment>
    );
  }
}

export default Counter;
