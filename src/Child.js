import React, { Component } from 'react';
import Grandchild from './Grandchild';
import { connect } from 'react-redux'  // to hook into our react store

class Child extends Component {
    render() {
        return (
            <div>
                <Grandchild />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {  // always going to return to be able to use something
        legos: state
    }


}

export default connect(mapStateToProps)(Child);