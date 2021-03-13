import React, {Component} from 'react';
import './StateComponent.css'

export class ComponentLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('Je passe dans le constructeur')
    }

    componentWillMount() {
        console.log('Je passe dans le componentWillMount')
    }

    render() {
        return (
            <div>

            </div>
        )
    }

    componentDidMount() {
        console.log('Je passe dans le componentDidMount')
    }

    componentWillReceiveProps() {
        console.log('Je passe dans le componentWillReceiveProps')
    }

    shouldComponentUpdate() {
        console.log('Je passe dans le shouldComponentUpdate')
    }

    componentWillUpdate() {
        console.log('Je passe dans le componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('Je passe dans le componentDidUpdate')
    }

}