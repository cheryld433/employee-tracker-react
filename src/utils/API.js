import axios from "axios";

export default  {
    getUsersInfo: function(){
        return axios.get("http://randomuser.me/api/?results=150&nat=us");
    
    }
};
// API call for random employees 
// Image name phone email DOB


// import axios from "axios";
// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };