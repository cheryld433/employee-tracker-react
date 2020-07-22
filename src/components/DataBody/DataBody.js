import React from "react";
//import stylesheet

function DataBody({users}) {
    return (
        //  users.map (({name, picture, phone, email, dob}) => {
            // return(
                <tr>
                    <td >
                        {/* image */}
                    </td>
                    <td>
                        {/* name */}
                    </td>
                    <td>
                        {/* phone */}
                    </td>
                    <td>
                        {/* email */}
                    </td>
                    <td>
                        {/* DOB */}
                    </td>
                </tr>

            )

        // })
    );
}
// Image name phone email DOB


export default DataBody;

// Context provides a way to pass data 
// through the component tree without ha
// pass props down manually at every level.

// Context is designed to share data 
// that can be considered “global”