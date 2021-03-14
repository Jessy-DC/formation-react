import React, {Component} from 'react';
import {GamesTable} from "./GamesTable";
import {SearchComponent} from "./SearchComponent";

export class FilterableGamesTable extends Component {
    constructor(props) {
        super(props);
        console.log("Games ", props.games)
    }

    render() {
        return (
            <div>
                FilterableGames
                <SearchComponent />
                <GamesTable games={this.props.games} />
            </div>
        )
    }
}