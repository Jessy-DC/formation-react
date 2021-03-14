import React, {Component} from 'react';
import {GamesTable} from "./GamesTable";
import {SearchComponent} from "./SearchComponent";

export class FilterableGamesTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    handleFilterTextChange = (value) => {
        this.setState({filterText: value})
    }

    handleInStockChange = (value) => {
        this.setState({inStockOnly: value})
    }

    render() {
        return (
            <div>
                <SearchComponent
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    handleInStockChange={this.handleInStockChange}
                    handleFilterTextChange={this.handleFilterTextChange}
                />
                <GamesTable
                    games={this.props.games}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}