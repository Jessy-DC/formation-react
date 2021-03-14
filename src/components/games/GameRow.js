import React, {Component} from 'react';

export class GameRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let name;

        if(this.props.game.stocked) {
            name = this.props.game.name
        } else {
            name = <span style={{color: 'red'}}>{this.props.game.name}</span>
        }

        return (
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{this.props.game.price}</td>
                </tr>
            </tbody>

        )
    }
}