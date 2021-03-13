import React from 'react'
import './PureComponent.css'

export function PureComponent() {
    return (
        <div>
            <h6 className="pure-h6">Pure component</h6>
        </div>
    )
}

export function PureComponentProps(props) {
    return (
        <div>
            <h6 className="pure-props-h6">Pure props component {props.label} agé de {props.age} ans</h6>
        </div>
    )
}