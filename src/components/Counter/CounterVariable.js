import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    decrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    render() {
        const { count } = this.state;

        return (
            <div>
                <div>{count}</div>
                <button onClick={this.increment}>Increment +</button>
                <button onClick={this.decrement}>Decrement -</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Counter;
