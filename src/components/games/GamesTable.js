import React, {Component} from 'react';
import {GameCategory} from "./GameCategory";
import {GameRow} from "./GameRow";

export class GamesTable extends Component {
    constructor(props) {
        super(props);
        console.log("GamesTable ", props.games)
    }

    render() {
        const ROWS = []
        //ROWS.push(<GameRow key={1} />)
        //ROWS.push(<GameRow key={2} />)
        this.props.games.forEach((element) => {
            ROWS.push(<GameRow key={element.name} game={element} />)
        })

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <GameCategory category={"FPS"} />
                    {ROWS}
                </table>


            </div>
        )
    }
}