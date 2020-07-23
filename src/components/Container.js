import React, { Component } from "react"
import API from "../utils/API";
import SearchBox from "./SearchBox"
import TableData from "./TableData"
import "./style.css";

class Container extends Component {

    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""
    };

    componentDidMount() {
        API.getUsersInfo().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }
    // names in ascending and descending order:
    //  sortByName = () => {
    
    // handleInputChange = event => {

    //API call triggered at opening and refresh:
   

    //when button search it's clicked:



    render() {

        return (
            <div>

                <SearchBox
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                <TableData results={this.state.filteredEmployees}
                    sortByName={this.sortByName}

                />
            </div >
        )
    }
}

export default Container;