import axios from "axios";
export default {
    
    getUsersInfo: function () {
        return axios.get("https://randomuser.me/api/?results=150&nat=us");
    }
};

