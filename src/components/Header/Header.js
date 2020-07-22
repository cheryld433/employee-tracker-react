import React, { Component } from "react";
//import stylesheet

export default class Header extends Component {
    render () {
        return (
            <div className="header text-center">
                <h1>Employee Directory</h1>
                <p>Click on carrots to filter by jeading or use the search box to narrow your results.</p>
            </div>
        );
    }
}
