import React, {Component} from 'react';

export class GameCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.category}</td>
            </tr>
        )
    }
}