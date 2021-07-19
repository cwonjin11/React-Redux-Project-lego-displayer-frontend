

import React, { Component } from 'react';


export default class AnotherComponent extends Component {
    render() { console.log(this.props)
        return (
            <div>
                <li>{this.props.name}</li>
            </div>
        );
    }
}



// function AnotherComponent(props){
//    return <li> {props.name} is {props.age} years old</li>
// }

// function AnotherComponent({name, age}){
//    return <li> {name} is {age} years old</li>
// }

// export default AnotherComponent;