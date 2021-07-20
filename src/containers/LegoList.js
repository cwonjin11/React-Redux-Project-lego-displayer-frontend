import { Component } from 'react'
import Lego from '../components/Lego'
import { connect } from 'react-redux'
import { fetchLegos } from '../redux/actions/index'
import Search from '../components/Search'

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
            // lego.item_number.toLowerCase().includes(lowerStateTerm))
        return (filteredLegos.map( (lego, i) => { return <Lego lego={lego} key={i} /> }))
    } 



    render() { 
        return(<>
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