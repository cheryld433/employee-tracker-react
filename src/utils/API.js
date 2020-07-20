import axios from "axios";

export default  {
    getUsers: function(){
        return axios.get("http://randomuser.me/api/?results=200&&nat=us");
    
    }
};
// API call for random employees 
// Image name phone email DOB

