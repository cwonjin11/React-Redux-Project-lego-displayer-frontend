import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeLego } from '../redux/actions/index'
import { editLego } from '../redux/actions/index'

const Lego = ({ lego, removeLego, editLego }) => {
    return (
        <div className="lego-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="lego-image" src={lego.image} alt={lego.name} />
                    </div>
                    <div className="flip-card-back">
                        {/* <img className="lego-image-small" src={lego.image} alt={lego.name} /> */}
                        <p className="card-back-text">Lego Name : {lego.name} </p>
                        <p>Item Number: {lego.item_number}</p>
                        <p>Pieces: {lego.pieces}</p>
                        <p>Prices: {lego.prices}</p>
                    </div>
                </div>
            </div>
            <div className="lego-init-info">
                <p className="lego-name">{lego.name}</p>
                <p className="lego-item_number">{lego.item_number}</p>
                <NavLink to={`/legos/${lego.id}/edit`}><button className="btn" onClick={()=>editLego(lego)}>Edit</button></NavLink>
                <button className="delete-btn" onClick={ () => removeLego(lego.id) }>Delete</button>
            </div>
        </div>
    )
}
export default connect(null, { removeLego, editLego })(Lego)