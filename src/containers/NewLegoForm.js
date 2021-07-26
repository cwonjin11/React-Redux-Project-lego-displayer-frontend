import { Component } from 'react'
import { connect } from 'react-redux'
import { addNewLego } from '../redux/actions/index'

class NewLegoForm extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            name: "",
            item_number: "",
            image: "",
            pieces: "",
            prices: ""
        }
    }


    submitHandler = (e) => {   
        console.log("submitHandler")
        e.preventDefault();
        this.props.addNewLego(this.state)  
        console.log("addNewLego")
        this.props.history.push('/legos') 
    }

    onChangeHandler = (e) => { console.log(e.target.value)
        this.setState({ 
            [e.target.name]: e.target.value
            
        })
        console.log(this.state)
    }

    render() {
        console.log("in render")
        return(
            <div className="new-form-div">
                <h1> Add a New Lego</h1>
                <form className="form" onSubmit={this.submitHandler}>
                    <input type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={this.state.name} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="item_number" 
                        placeholder="Item Number" 
                        value={this.state.item_number} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="image" 
                        placeholder="Image URL" 
                        value={this.state.image} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="pieces" 
                        placeholder="Pieces" 
                        value={this.state.pieces} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <input type="text" 
                        name="prices" 
                        placeholder="Prices" 
                        value={this.state.prices} 
                        onChange={this.onChangeHandler} 
                    /><br></br>
                    <br></br>
                    <input type="submit" value="Add a Lego" className="btn"/>
                </form>
            </div>
        )
    }
}
export default connect(null, { addNewLego })(NewLegoForm)  
