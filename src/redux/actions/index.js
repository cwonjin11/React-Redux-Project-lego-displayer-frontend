

export const fetchLegos = () => {  
    return(dispatch) => {
        return fetch('http://localhost:3000/legos')
            .then(response => response.json())
            .then(legos => { console.log('fetchLegos', legos)
                dispatch({ type: 'FETCH_LEGOS', payload: legos})
            })
    }
}


export const addNewLego = (newLego) => { console.log("redux/action/index : top of addNewLego")
    return (dispatch) => { console.log("redux/action:index : top of thunk function")
        return fetch('http://localhost:3000/legos', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({lego: newLego})
        })
        .then(response => response.json())
        .then(newLego => { console.log("redux/action:index : right before dispatch")
        dispatch({ type: 'ADD_LEGO', payload: newLego })   
        console.log("redux/action:index : botton of thunk function ")
        }) 
    }
}

export const removeLego = (legoId) => {
    return(dispatch) => {  
        return fetch(`http://localhost:3000/legos/${legoId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(lego => {
            dispatch({ type: 'REMOVE_LEGO', payload: lego.id })
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















//// if i dont set render json to backend delete action, use this code

// export const removeLego = (legoId) => {
//     return(dispatch) => {  dispatch({ type: 'REMOVE_LEGO', payload: legoId })
//         return fetch(`http://localhost:3000/legos/${legoId}`, {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' }
//         })
//     }
// }