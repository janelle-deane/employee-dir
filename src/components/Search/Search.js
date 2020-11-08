import './Search.css';
import React, { Component } from 'react';
import API from "../../utils/API";
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import TableHeader from '../TableHeader/TableHeader';

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchName: "",
            names: [],
            sortedFriends: [],
            results: [], 
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit=this.handleFormSubmit.bind(this)
       
    }
   

    // Pull random people from API
    componentDidMount() {
        API.getRandomPeople().then(res => {
            this.setState({ sortedFriends: res.data.results })
            this.setState({ results: res.data.results })
        })
    }

    // Pull name searching for
    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    // Sort Employee
    

    // When I hit submit, the results are filtered for that name
    handleFormSubmit = event => {
        event.preventDefault();
        let sortEmployee = searchName => {
            let sortedFriends = this.state.results.filter(employee => {
              return employee.name.first=== searchName
            });
            console.log(sortedFriends)
            this.setState({sortedFriends})
        }
        console.log(this.state.searchName)
        sortEmployee(this.state.searchName)
       


    }


    render() {
        return (
            <div>
                <div className="Search">
                    <form onSubmit={this.handleFormSubmit}>
                        <datalist id="names">
                            {this.state.results.map(emp => <option>{emp.name.first}</option>)}
                        </datalist>
                        <input name="searchName" list="names" value={this.state.searchName} onChange={this.handleInputChange} />
                        <button>Search!</button>
                    </form>

                </div>
                <table className="employeeTable">  
                <TableHeader/>
                {this.state.sortedFriends.map(employee => (<EmployeeCard
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    gender={employee.gender}
                    email={employee.email}
                    phone={employee.phone}
                    picture={employee.picture.thumbnail}
                    key={employee.id.value}
                />
                ))}
                </table>
            </div>
        )
    }
}
