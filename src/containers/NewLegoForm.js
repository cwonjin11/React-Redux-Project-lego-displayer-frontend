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

    //submitHandler will going to call an action that is going to dispatch that new object to our reducer 
    //so we can update our store state.
    submitHandler = (e) => {   //1. Click for submit button which triggers onSubmit event handler
        e.preventDefault();
        this.props.addNewLego(this.state)  // 2. The event handler calls this.props.addNewLego(this.state) which is invoking our action creator
        this.props.history.push('/legos')
        // this.setState({
        //     name: "",
        //     item_number: "",
        //     image: "",
        //     pieces: "",
        //     prices: ""
        // })
    }

    onChangeHandler = (e) => {
        this.setState({ //our onChangeHandler method makes use of the 'setState' method, which is what we use to alter state
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div className="new-form-div">
                <h1> Add a New Lego</h1>
                <form className="form" onSubmit={this.submitHandler}>
                    <input type="text" 
                        name="name" //name attribute to determine which state i need to change and which state property i need to change in one method
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
export default connect(null, { addNewLego })(NewLegoForm)  //3. The returned action object is then passed as an argument to the dispatch method - this happens behind the scenes since connect recognized that we passed an object as the second argument