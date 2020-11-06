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
            this.setState({names:res.data.results})
            this.setState({results:res.data.results})
        })
    }

    // Pull name searching for
    handleInputChange = event=>{
        const {name,value} = event.target;
        this.setState({
            searchName:event.target.value
        })
    }

    // Sort Employee
    sortEmployee = name =>{
        const sortedFriends=this.state.results.filter(employee => employee.name === name); 
        this.setState({sortedFriends: sortedFriends})
    }

    // When I hit submit, the results are filtered for that name
    handleFormSubmit = event=>{
        event.preventDefault();
        this.sortEmployee(this.state.searchName).then(res=>{
            this.setState({results:res.data.results})
        })
    }


    render() {
        return (
            <div>
              <div className ="Search">
                <form onSubmit={this.handleFormSubmit}>
                    <datalist id="names">
                        {this.state.results.map(name=><option>{name}</option>)}
                    </datalist>
                    <input  name="searchName" list="names" value={this.state.searchName} onChange={this.handleInputChange} />
                    <button>Search!</button>
                </form>
                
            </div>   
               {this.state.results.map(employee =>( <EmployeeCard
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
