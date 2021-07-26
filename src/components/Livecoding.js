

// create a component. Add input field and from the input, display the length of character on the browser
import React, { Component } from 'react';

class Livecoding extends Component {

    constructor(props) {
        super(props) 
        this.state = { 
            name: ""
        }
    }

    onChangeHandler = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input 
                type="text"
                name="name"
                placeholder="any inputs"
                onChange={this.onChangeHandler}
                value={this.state.name}
            />
            <p>{this.state.name.length}</p>
            </div>
        );
    }
   
}

export default Livecoding;


// import React, { Component } from 'react';

// class Livecoding extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default Livecoding;