import React from "react";
//import style

function SearchBox({handleSearchChange}) {
    return (
        <div className="searchbox" >
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" 
                type="search" placeholder="Search" aria-label="Search" 
                onChange={e => handleSearchChange(e)} />
                <button className="btn btn-outline-success my-2 my-sm-0" 
                type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBox;
