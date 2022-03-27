import React, { Component } from "react";

// rcc снипет
class Counter extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  // ОБОРОБОТЧИКИ ДЕЛАЕМ СТРЕЛКАМИ ( или bind)
  increment = (e) => {
    // this.state.count++; // напрямую менять состояние нельзя
    const { count } = this.state;
    const { step } = this.props;
    this.setState({ count: count + step }); // для рендера
  };
  dicrement = (e) => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({ count: count - step });
  };

  render() {
    const { count } = this.state;
    const { step } = this.props;
    return (
      <>
        <div>{count}</div>
        <button onClick={this.dicrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
