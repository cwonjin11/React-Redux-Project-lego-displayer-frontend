import React from 'react'

const Search = (props) => {

    const onChangeHandler = (event) => {
        props.search(event.target.value)
    }

    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search legos by name or item#"
                onChange={onChangeHandler}
                value={props.searchTermProp}
            />
        </div>
    )
}

export default Search