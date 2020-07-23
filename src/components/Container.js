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
    sortByName = () => {
        const filtered = this.state.filteredEmployees;
        console.log(filtered)
        if(this.state.order === "ascend") {
            const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorted)

            this.setState({ 
                filteredEmployees: sorted,
                order: "descend"
            })
        } else {
            const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorted)

            this.setState({
                filteredEmployees: sorted,
                order: "ascend"
            })
        }


    }

    handleInputChange = event => {
        const employees = this.state.employees;
        const userInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(userInput.toLowerCase()) > -1)
         
        this.setState({ 
            filteredEmployees,
        });
    }

    //API call triggered at opening and refresh:
    employeeSearch = () => {
        API.getUsersInfo()
        .then(res => this.setState({

        }))
        .catch(err => console.log( err ))
    }

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