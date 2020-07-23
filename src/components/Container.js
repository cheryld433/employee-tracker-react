import React, { Component } from "react";
import API from "../utils/API";
import TableData from "../components/TableData";
import SearchBox from "../components/SearchBox";
import "../components/style.css";

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

    componentDidMount(){
        API.getUsers().then(res => this.setState({
            employees: res.data.results, 
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    };

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
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(userInput.toLowerCase()) > -1 )

        this.setState({
            filteredEmployees, 
        });
    };

    employeeSearch = () => {
        API.getUsers() 
        .then(res => this.setState({
            filteredEmployees: res.data.result,
            employee: res.data.result
        }))
    };

    

}
    









export default Container;