import React from 'react'

const Search = (props) => {
    return (
        <div className="container  mt-4">
            <div className="row ">
                <div className="input">
                <form onSubmit={props.SearchSubmit} action="">
                    <input type="text"  onChange={props.SearchChange}  placeholder="Search..."/>
                </form>
                </div>
               
            </div>
            
        </div>
    )
}

export default Search
