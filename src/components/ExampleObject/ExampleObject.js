import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class ExampleObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            metier: "fullstack dev",
            niveau: "en formation"
        };
    }

    handleJunior = () => {
        this.setState({ niveau: "Junior" });
    };

    handleIntermediaire = () => {
        this.setState({ niveau: "Intermediaire" });
    };

    handleSenior = () => {
        this.setState({ niveau: "Senior" });
    };

    render() {
        const { metier, niveau } = this.state;

        return (
            <div>
                <Navbar />
                <h1>Je suis {metier} {niveau}</h1>
                <button onClick={this.handleJunior}>Dans trois mois je serai</button>
                <button onClick={this.handleIntermediaire}>Dans 1 an je serai</button>
                <button onClick={this.handleSenior}>Dans 5 ans je serai</button>
            </div>
        );
    }
}

export default ExampleObject;
