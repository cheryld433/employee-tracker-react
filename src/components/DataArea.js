import React, { Component }from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";
// import API from "../utils/API"

//import stylesheet

export default class DataArea extends Component {




    render() {
        return(
            <> 
                <Nav handleSearchChange={this.handleSearchChange} />
                    <div className="data-area">
                    <DataTable
                        headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort= {this.handleSort}
                    />
                </div>
            </>
        );
    }
}