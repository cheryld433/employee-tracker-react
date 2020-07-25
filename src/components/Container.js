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

//   names in ascending and descending order:
    sortByName = () => {
        const filtereds = this.state.filteredEmployees;
        if (this.state.order === "ascend") {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sorteds)

            this.setState({
                filteredEmployees: sorteds,
                order: "descend"
            })
        } else {

            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorteds)

            this.setState({
                filteredEmployees: sorteds,
                order: "ascend"
            })
        }
    }
    
    handleInputChange = event => {

        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1)
        
        this.setState({
            filteredEmployees,
        });
    };

    // API call triggered at opening and refresh:
    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({

                filteredEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }

    // when button search it's clicked:
    handleSearch = event => {
        event.preventDefault();
        if (!this.state.search) {
            alert("Enter a name")
        }
        const { employees, search } = this.state;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            filteredEmployees
        });
    }

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