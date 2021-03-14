import React, {Component} from 'react';

export class GameCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tbody>
                <tr>
                    <th colSpan={2}>{this.props.category}</th>
                </tr>
            </tbody>
        )
    }
}