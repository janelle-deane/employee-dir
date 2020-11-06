import './Search.css';
import React, { Component } from 'react';
import API from "../../utils/API";
import EmployeeCard from '../EmployeeCard/EmployeeCard';

export default class Search extends Component {
    state={
        searchName: "", 
        names:[],
        sortedFriends: [], 
        results:[]
    }

    // Pull random people from API
    componentDidMount(){
        API.getRandomPeople().then(res=>{
            this.setState({sortedFriends:res.data.results})
            this.setState({results:res.data.results})
        })
    }

    // Pull name searching for
    handleInputChange = event=>{
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    // Sort Employee
    sortEmployee = searchName =>{
        const sortedFriends=this.state.results.filter(employee => employee.name.first.toLowerCase() === searchName); 
        this.setState({sortedFriends: sortedFriends})
    }

    // When I hit submit, the results are filtered for that name
    handleFormSubmit = event=>{
        event.preventDefault();
        this.sortEmployee(this.state.searchName)
    }


    render() {
        return (
            <div>
              <div className ="Search">
                <form onChange={this.handleFormSubmit}>
                    <datalist id="names">
                        {this.state.results.map(emp=><option>{emp.name.first}</option>)}
                    </datalist>
                    <input  name="searchName" list="names" value={this.state.searchName} onChange={this.handleInputChange} />
                    <button>Search!</button>
                </form>
                
            </div>   
               {this.state.sortedFriends.map(employee =>( <EmployeeCard
                firstName ={employee.name.first}
                lastName ={employee.name.last}
                gender ={employee.gender}
                email ={employee.email}
                phone={employee.phone}
                picture={employee.picture.thumbnail}
                key={employee.id.value}
                />
                ))}
            </div>
        )
    }
}
