
import React from 'react';

const Filtering = (props) => {
    return (
        <div className="filtering"><p>Sort :</p>
        <button type="button" value="AtoZ" name="sort" onClick={(e) => props.updateSort(e.target.value)}>A to Z </button>
        <button type="button" value="ZtoA" name="sort" onClick={(e) => props.updateSort(e.target.value)}>Z to A </button>
        <button type="button" value="PriceHigh" name="sort" onClick={(e) => props.updateSort(e.target.value)}>Price ⬆ </button>
        <button type="button" value="PriceLow" name="sort" onClick={(e) => props.updateSort(e.target.value)}>Price ⬇ </button>
        </div>
    )
}

export default Filtering;