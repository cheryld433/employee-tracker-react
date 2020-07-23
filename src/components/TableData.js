import React from "react";
import Moment from "react-moment";
import "../components/style.css";


function TableData(props) {
    return (
        <table ClassName="tableEmployee">
            <thead>
                <tr>
                    {/* remains empty as placeholder */}
                    <th></th> 
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody className="">
                {props.results.map(result => (
                    <tr className="table" key={result.login.uuid}>
                        <td> <img className="" src={result.picture.medium} alt="" /></td>
                        <td>{result.name.first + result.name.last} </td>
                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableData;