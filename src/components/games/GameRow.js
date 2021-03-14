import React, {Component} from 'react';

export class GameRow extends Component {
    constructor(props) {
        super(props);
        console.log("game ", props.game)
    }

    render() {
        let name;

        if(this.props.game.stocked) {
            name = this.props.game.name
        } else {
            name = <span style={{color: 'red'}}>{this.props.game.name}</span>
        }

        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.game.price}</td>
            </tr>
        )
    }
}