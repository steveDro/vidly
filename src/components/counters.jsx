import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <div className="col-8">
          {" "}
          <button onClick={onReset} className="btn btn-primary btn-sm">
            Reset
          </button>
        </div>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            selected
          >
            {/* {this.state.counters} */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
