import React, {Component} from 'react';
import './StateComponent.css'

export class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }
        //this.handleChange = this.handleChange.bind(this)
    }

    // handleChange() {
    //     this.setState({
    //         name: 'Nouveau nom'
    //     })
    // }

    handleChange = (event) => {
        this.setState({
            name : event.target.value
        })
        this.props.onInputChange(event.target.value)
    }

    render() {
        return (
            <div>
                <h6 className={"state-h6"}>Component State {this.props.name}</h6>
                <input type="text" value={this.state.name} onChange={this.handleChange}></input>
            </div>
        )
    }
}