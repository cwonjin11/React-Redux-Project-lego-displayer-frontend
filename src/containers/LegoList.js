import { Component } from 'react'
import Lego from '../components/Lego'
import { connect } from 'react-redux'
import { fetchLegos } from '../redux/actions/index'
import Search from '../components/Search'
import Filtering from '../components/Filtering';


class LegoList extends Component {

    constructor() {
        super()  //we should call super() in the constructor since we are inheriting from another class via the extends keyword
        this.state = {  //'this' is an instance of LegoList class  
            term: ""     // it is saying that this instance of LegoList class should have a property called state that has a value of {term: ""}
        }
        // console.log(this.state)
    }
    
    //once this component is loaded, then, do something
    componentDidMount() {  // hey, when this LegoList component mounts, let's make a fetch request and get all the data
        this.props.fetchLegos()
    }   

    searchLegos = (term) => { 
        this.setState({  //our searchLegos method makes use of the 'setState' method, which is what we use to alter state
            term: term 
        })
    }

    filterLegos = () => {
        // let lowerStateTerm = this.state.term.toLowerCase();
        let lowerStateTerm = this.state.term.toLowerCase();
        let filteredLegos = this.props.legos.filter(lego => 
            lego.name.toLowerCase().includes(lowerStateTerm) )
            // lego.item_number.toLowerCase().includes(lowerStateTerm))
            
            
            switch(this.state.sort) {
                case "AtoZ":
                    return filteredLegos.sort((a,b) => a.name > b.name ? 1 : -1).map( (lego, index) => { return <Lego lego={lego} key={index} /> })
                case "ZtoA":
                    return filteredLegos.sort((a,b) => a.name > b.name ? 1 : -1).reverse().map( (lego, index) => { return <Lego lego={lego} key={index} /> })   
                case "PriceHigh":
                    return filteredLegos.sort((a,b) => a.prices > b.prices ? 1 : -1).map( (lego, index) => { return <Lego lego={lego} key={index} /> })
                case "PriceLow":
                    return filteredLegos.sort((a,b) => a.prices > b.prices ? 1 : -1).reverse().map( (lego, index) => { return <Lego lego={lego} key={index} /> })   
                    
                    
                // case "CreationOld":
                //     return filteredLegos.map( (lego, index) => { return <Lego lego={lego} key={index} /> })
                // case "CreationYoung":
                //     return filteredLegos.reverse().map( (lego, index) => { return <Lego lego={lego} key={index} /> })  
                default:
                    return (filteredLegos.map( (lego, index) => { return <Lego lego={lego} key={index} /> }))
            }
    } 

    updateSort = sortBy => {
        this.setState({ sort: sortBy })
    }



    render() { 
        return(<>
            <div className="filtering">
            <Filtering sort={this.state.sort} updateSort={this.updateSort} />
            </div><br />

            <Search searchTermProp={this.state.term} search={this.searchLegos}/>
            <div className="legos-container">
                {this.filterLegos()}
            </div>
        </>)
    }

}

const mapStateToProps = (state) => {
    return {
        legos: state.legos
    }
}

export default connect(mapStateToProps, { fetchLegos })(LegoList)