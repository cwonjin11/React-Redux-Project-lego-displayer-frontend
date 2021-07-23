
//action returs two things :1.type, 2.payload
export const fetchLegos = () => {  //going to create an action that is going to fetch the legos from my api
    return(dispatch) => {
        return fetch('http://localhost:3000/legos')
            .then(response => response.json())
            .then(legos => { console.log('fetchLegos', legos)
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
            dispatch({ type: 'ADD_LEGO', payload: newLego })   //4. The dispatch method then invokes our reducer and passes along the action object as an argument
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