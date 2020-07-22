import React, { useState, UseEffect }from "react";
import DataTable from "../DataTable";
import Nav from "../Nav";
import API from "./utils/API";
import "../DataArea/";
import "../../utils/DataContext.js";

// Goes into main.js

const DataArea = () => {
    const [developerState, setDeveloperState] = UseState({
        users: [],
        filteredUsers:[],
        order: "ascend", 
        heading: [
            // need to include width  for each component:
            {name: "Image", width:""},
            {name: "Name", width: ""},
            {name: "Phone", width: ""},
            {name: "Email", width: ""},
            {name: "DOB", width: ""}
        ] 
    });
    // handleSort: 
    const handleSort = heading => {
        if(developerState.order === "descend") {
            setDeveloperState({
                order: "ascend"
            })
        } else {
            setDeveloperState({
                order: "descend"
            })
        }

        //compareFnc:
        // The localeCompare() method returns a number indicating whether a 
        // reference string comes before, or after, or is the same as the 
        // given string in sort order.

        const compareFnc = (a, b) => {
            if(developerState.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if(b[heading] === undefined) {
                    return -1;
                } else if(heading  === "name") {
                    return b[heading].first.localeCompare(a[heading] .first);
                } else {
                    return b[heading] - a[heading];
                }              
            }
            }

        }

    }

    // handleSearchChange:

    //useEffect:


    // return:

}

export default DataArea;
