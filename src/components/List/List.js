import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    coursImportant: "React js"
                },
                {
                    id: 2,
                    coursImportant: "html css"
                },
                {
                    id: 3,
                    coursImportant: "vanilla javascript"
                }
            ]
        };
    }

    render() {
        const { list } = this.state;

        return (
            <div>
                <Navbar />
                <h1>Liste des cours les plus importants</h1>
                {list.map((cour) => (
                    <div key={cour.id}>{cour.coursImportant}</div>
                ))}
            </div>
        );
    }
}

export default List;
