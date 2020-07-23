import React, { Component } from "react";
import API from "../utils/API";
import TableData from "../components/TableData";
import SearchBox from "../components/SearchBox";
import "./style.css";

class Container extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""
    };

    // setState() enqueues(Adds to the queue) changes to the component state and tells React 
    // that this component and its children need to be re-rendered with 
    // the updated state.
    componentDidMount() {
        API.getUsersInfo().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }



    sortByName = () => {
        // filtered is looping:
        const filtereds = this.state.filteredEmployees;
        if(this.state.order === "ascend") {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
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

    };

    handleInputChange = event => {
        const employees = this.state.employees;
        const userInput = event.target.value;
        // ofIndex: return to first position;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(userInput.toLowerCase()) > -1 )

        this.setState({
            filteredEmployees, 
        });
    };
// API triggered at opening and refresh: 
    employeeSearch = () => {
        API.getUsersInfo() 
        .then(res => this.setState({
            // holds all data from the api call: 
            filteredEmployees: res.data.result,
            employee: res.data.result
        }))
    };

    // when search button is clicked: 
    handleSearch = event => {
        event.preventDefault();
        if(!this.state.search) {
            alert("Please enter a name")
        }    
        const {employees, search} = this.state;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            filteredEmployees
        });
    }

    render(){
        return(
            <div>
                <SearchBox
                employee={this.state.employees}
                handleSearch={this.handleSearch}
                handleInputChange={this.handleInputChange} />

                <TableData results= {this.state.filteredEmployees}
                     sortByName={this.sortByName} />
            </div>
        )
    }
}

export default Container;

