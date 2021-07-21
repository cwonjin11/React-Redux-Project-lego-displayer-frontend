import React, { Component } from 'react';
import { connect } from 'react-redux';

// basic redux installation
class Grandchild extends Component {
    render() {
        return (
            <div>
                {this.props.legos.map(lego => (
                    <p key={lego.id}> name : {lego.name} item_number: {lego.item_number} {/*lego.image*/}, pieces : {lego.pieces} prices : {lego.price} </p>
                ))}
            </div>
        );
    }
}

// { id: 3, name: "lego3", item_number: 30000, image:"https://www.lego.com/cdn/cs/set/assets/blt10cbc9ffc0459599/21056.jpg?fit=bounds&format=jpg&quality=80&width=65&height=45&dpr=2", pieces: 1222, price: 18.99},

const mapStateToProps = state => {
    // debugger  // through our redux store, we have access to the state // the only acces to state for grandchild is to mapStateToProps. 
    return {
        legos: state   //legos is just a variable, you can name it anything.
    }


}
export default connect(mapStateToProps)(Grandchild);