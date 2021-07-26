import { Component } from 'react'
import Lego from '../components/Lego'
import { connect } from 'react-redux'
import { fetchLegos } from '../redux/actions/index'
import Search from '../components/Search'
import Filtering from '../components/Filtering';


class LegoList extends Component {

    constructor() {
        super()  
        this.state = {  
            term: ""     
        }
    }
    

    componentDidMount() {  

            this.props.fetchLegos()

    }   

    searchLegos = (term) => { 
        this.setState({  
            term: term 
        })
    }

    filterLegos = () => {
        let lowerStateTerm = this.state.term.toLowerCase();
        let filteredLegos = this.props.legos.filter(lego => 
            lego.name.toLowerCase().includes(lowerStateTerm) )
            
            
            switch(this.state.sort) {
                case "AtoZ":
                    return filteredLegos.sort((a,b) => a.name > b.name ? 1 : -1).map( (lego, index) => { return <Lego lego={lego} key={index} /> })
                case "ZtoA":
                    return filteredLegos.sort((a,b) => a.name > b.name ? 1 : -1).reverse().map( (lego, index) => { return <Lego lego={lego} key={index} /> })   
                case "PriceHigh":
                    return filteredLegos.sort((a,b) => a.prices > b.prices ? 1 : -1).map( (lego, index) => { return <Lego lego={lego} key={index} /> })
                case "PriceLow":
                    return filteredLegos.sort((a,b) => a.prices > b.prices ? 1 : -1).reverse().map( (lego, index) => { return <Lego lego={lego} key={index} /> })     
                default:
                    return (filteredLegos.map( (lego, index) => { return <Lego lego={lego} key={index} /> }))
            }
    } 

    updateSort = sortBy => {
        this.setState({ sort: sortBy })
    }



    render() { console.log("in legolist render")
        return(<>
            <div className="filtering">
            <Filtering sort={this.state.sort} updateSort={this.updateSort} />
            </div><br />
            <div>
            <Search searchTermProp={this.state.term} search={this.searchLegos}/>
            </div>
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