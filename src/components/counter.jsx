import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"],
  //     addresses: [
  //       {
  //         phone: "02",
  //         address: "Lake house 01",
  //       },
  //       {
  //         phone: "03",
  //         address: "Lake pool 010",
  //       },
  //     ],

  //     imageUrl: "https://picsum.photos/200",
  //   };

  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  //   handleIncrement = () => {
  //     const value = this.state.value + 1;
  //     this.setState({ value });
  //   };

  disabled() {
    if (this.props.counter.value === 0) return true;
    return false;
  }

  render() {
    // console.log("props", this.props.counter.id);
    // console.log("children", this.props.children);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <span style={this.styles} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col-sm-3">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
          </div>
          <div className="col-sm-3">
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
              disabled={this.props.counter.value === 0}
            >
              -
            </button>
          </div>
          <div className="col-sm-3">
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              X
            </button>
          </div>
        </div>

        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ul>
          {this.state.addresses.map((ad) => (
            <li key={ad.phone}>{ad.address}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
