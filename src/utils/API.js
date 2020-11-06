import axios from "axios";

const API ={
getRandomPeople: function(){
    return axios('https://randomuser.me/api/?results=200&nat=us')
}

}

export default API; 