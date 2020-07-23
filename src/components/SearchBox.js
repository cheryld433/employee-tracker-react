import React from "react";
import "../components/style.css";

function SearchBox(props) {
    return(
        <div className="container-fluid">
            <header className="z-depth-5 col s12">
                <div className="row">
                    <div className="col-s6">
                        <h3 className="right-align headerText">Employee Directory</h3>
                    </div>
                </div>
                <div className="col s6">
                    <div className="col s6 inputButton right-align">
                        <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        id="employees"
                        type="text"
                        name="search"
                        list="employee"
                        className="inputBox"
                        placeholder="Search by name" />
                    </div>
                    <div className=" clo-m4">
                        <button 
                    type="submit"
                     value=""
                     className="z-depth-3 waves-effect searchBtn"
                     onClick={props.handleSearch}>Search</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default SearchBox;