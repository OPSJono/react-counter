import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["orange", "apple", "banana", "pear"],
    decrementClasses: ""
  };

  //   constructor() {
  //     super();
  //   }

  formatCount() {
    let { count } = this.state;
    if (count === 0) {
      count = "Zero";
    }

    return count;
  }

  getBadgeClasses() {
    let { count } = this.state;

    let classes = "m-2 badge badge-";

    if (count === 0) {
      classes += "warning";
    } else {
      classes += "primary";
    }

    return classes;
  }

  getDecrementClasses() {
    let classes = "btn btn-secondary btn-sm";

    if (this.state.count === 0) {
      classes += " disabled";
    }

    return classes;
  }

  renderTags() {
    const { tags } = this.state;

    if (tags.length === 0) {
      return <p>There are no items in this list.</p>;
    }

    return (
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const { count } = this.state;
    if (count > 0) {
      this.setState({ count: count - 1 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn m-2 btn-secondary btn-sm">
          Increment
        </button>
        <button onClick={this.handleDecrement} className={this.getDecrementClasses()}>
          Decrement
        </button>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }
}

export default Counter;
