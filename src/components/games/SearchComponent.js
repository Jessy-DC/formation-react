import React, {Component} from 'react';

export class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.handleFilterText = this.handleFilterText.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterText(e) {
        console.log(e.target.value)
    }

    handleInStockChange(e) {
        console.log(e.target.checked)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={this.handleFilterText}
                />

                <input
                    type="checkbox"
                    onChange={this.handleInStockChange}
                />
                {' '}
                Products available only
            </div>
        )
    }
}