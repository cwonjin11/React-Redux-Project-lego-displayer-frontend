import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeLego } from '../redux/actions/index'
import { editLego } from '../redux/actions/index'

const Lego = ({ lego, removeLego, editLego }) => {
    return (
        <div className="album-card">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="album-image" src={lego.image} alt={lego.name} />
                    </div>
                    <div className="flip-card-back">
                        <p>Lego Name : {lego.name} </p>
                        <p>Item Number: {lego.item_number}</p>
                        <p>Pieces: {lego.pieces}</p>
                        <p>Prices: {lego.prices}</p>
                    </div>
                </div>
            </div>
            
            <div className="album-init-info">
                <p className="album-title">{lego.name}</p>
                <p className="album-artist">{lego.item_number}</p>
                <NavLink to={`/legos/${lego.id}/edit`}><button className="btn" onClick={()=>editLego(lego)}>Edit</button></NavLink>
                <button className="delete-btn" onClick={ () => removeLego(lego.id) }>Delete</button>
            </div>
        </div>
    )
}
export default connect(null, { removeLego, editLego })(Lego)