import React, {Component} from 'react';
import {GameCategory} from "./GameCategory";
import {GameRow} from "./GameRow";

export class GamesTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ROWS = []
        const FILTER_TEXT = this.props.filterText
        const IN_STOCK_ONLY = this.props.inStockOnly
        let gameCategory

        this.props.games.forEach((element) => {
            if(element.name.toLowerCase().indexOf(FILTER_TEXT.toLowerCase()) === -1) {
                return
            }

            if(IN_STOCK_ONLY && !element.stocked) {
                return
            }

            if(element.category !== gameCategory) {
                ROWS.push(<GameCategory category={element.category} />)
                gameCategory = element.category
            }

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
                    {ROWS}
                </table>
            </div>
        )
    }
}