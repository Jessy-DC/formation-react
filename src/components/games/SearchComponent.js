import React, {Component} from 'react';

export class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange(e) {
        this.props.handleFilterTextChange(e.target.value)
    }

    handleInStockChange(e) {
        this.props.handleInStockChange(e.target.checked)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />

                <input
                    type="checkbox"
                    onChange={this.handleInStockChange}
                    checked={this.props.inStockOnly}
                />
                {' '}
                Products available only
            </div>
        )
    }
}