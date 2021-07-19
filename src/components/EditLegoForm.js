import { Component } from 'react'
import { connect } from 'react-redux'
import { editLego } from '../redux/actions/index'

class EditLegoForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            item_number: "",
            image: "",
            pieces: "",
            prices: ""
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.lego.id, 
            name: this.props.lego.name,
            item_number: this.props.lego.item_number,
            image: this.props.lego.image,
            pieces: this.props.lego.pieces,
            prices: this.props.lego.prices
        })
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.editLego(this.state)
        this.props.history.push('/legos')
    }

    render() {
        return(
            <div className="edit-form-div">
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
                    <input type="submit" value="Save Changes" className="btn"/>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state, legoId) => {
    const id = parseInt(legoId.match.params.id)
    return {
        lego: state.legos.find(lego => lego.id === id)
    }
}
export default connect(mapStateToProps, { editLego })(EditLegoForm)