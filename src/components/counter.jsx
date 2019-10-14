import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    items: [
      { id: 1, name: "Orange", count: 0 },
      { id: 2, name: "Apple", count: 0 },
      { id: 3, name: "Banana", count: 0 },
      { id: 4, name: "Pear", count: 0 }
    ]
  };

  //   constructor() {
  //     super();
  //   }

  formatCount = product => {
    let { items } = this.state;

    let count = "Zero";

    items.forEach(function(item) {
      if (item.id === product) {
        if (item.count > 0) {
          count = item.count;
        }
      }
    });

    return count;
  };

  getBadgeClasses = product => {
    let { items } = this.state;

    let classes = "m-2 badge badge-";

    items.forEach(function(item) {
      if (item.id === product) {
        if (item.count === 0) {
          classes += "warning";
        } else {
          classes += "primary";
        }
      }
    });

    return classes;
  };

  getDecrementClasses = product => {
    let classes = "btn btn-secondary btn-sm";
    const { items } = this.state;

    items.forEach(function(item) {
      if (item.id === product) {
        if (item.count === 0) {
          classes += " disabled";
        }
      }
    });

    return classes;
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

  renderItems() {
    const { items } = this.state;

    if (items.length === 0) {
      return <p>There are no items in your shopping cart.</p>;
    }

    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <span className={this.getBadgeClasses(item.id)}>{this.formatCount(item.id)}</span>
            <button onClick={() => this.handleIncrement(item.id)} className="btn m-2 btn-secondary btn-sm">
              Increment
            </button>
            <button onClick={() => this.handleDecrement(item.id)} className={this.getDecrementClasses(item.id)}>
              Decrement
            </button>
            <button onClick={() => this.removeItem(item.id)} className="btn m-2 btn-danger btn-sm">
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    let { items } = this.state;

    items.forEach(function(item) {
      if (item.id === product) {
        item.count = item.count + 1;
      }
    });

    this.setState({ items: items });
  };

  handleDecrement = product => {
    let { items } = this.state;

    items.forEach(function(item) {
      if (item.id === product) {
        if (item.count > 0) {
          item.count = item.count - 1;
        }
      }
    });

    this.setState({ items: items });
  };

  removeItem = product => {
    let { items } = this.state;

    const index = items.findIndex(function(item) {
      return item.id === product;
    });

    items.splice(index, 1);

    this.setState({ items: items });
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
}

export default Counter;
