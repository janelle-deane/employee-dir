import './Search.css';
import React, { Component } from 'react';
import API from "../../utils/API";
import EmployeeCard from '../EmployeeCard/EmployeeCard';

export default class Search extends Component {
    state={
        searchName: "", 
        names:[],
        results:[]
    }

    // Pull random people from API
    componentDidMount(){
        API.getRandomPeople().then(res=>{
            this.setState({names:res.data.results})
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
    sortEmployee(){
        
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
                {this.state.results.map(pic=><img src={pic}/>)}
            </div>   
                <EmployeeCard
                firstName ={this.state.results.name.first}
                lastName ={this.state.results.name.last}
                gender ={this.state.results.gender}
                email ={this.state.results.email}
                phone={this.state.results.phone}
                />
            </div>
        )
    }
}

// import React from 'react'

// export default function Search() {
//     return (
//         <div>
//             <h2>Search Component</h2>
//         </div>
//     )
// }
