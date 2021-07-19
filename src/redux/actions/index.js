export const fetchLegos = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/legos')
            .then(response => response.json())
            .then(legos => { console.log(legos)
                dispatch({ type: 'FETCH_LEGOS', payload: legos})
            })
    }
}

export const addNewLego = (newLego) => {
    return(dispatch) => {
        return fetch('http://localhost:3000/legos', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({lego: newLego})
        })
        .then(response => response.json())
        .then(newLego => {
            dispatch({ type: 'ADD_LEGO', payload: newLego })
        })
    }
}

export const removeLego = (legoId) => {
    return(dispatch) => {  dispatch({ type: 'REMOVE_LEGO', payload: legoId })
        return fetch(`http://localhost:3000/legos/${legoId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

export const editLego = (lego) => {
    return(dispatch) => { 
        return fetch(`http://localhost:3000/legos/${lego.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lego: lego })
        })
        .then(response => response.json())
        .then(updatedLego => {
            dispatch({ type: 'EDIT_LEGO', payload: updatedLego })
        })
    }
}