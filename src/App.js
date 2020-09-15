import React from 'react';
import Employee from "./components/Employee";
import Nav from "./components/Nav";
// import employees from "./Employees.json";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

// add in search function using the search bar,
// add in where you click a name, it filters it alphabetically or numerically

// loop through the array, 
// if employee[i].name.includes(search value) return value and render

// to sort the employees alphabetically
// employee.name.sort()

class App extends React.Component {

  state = {
    employees: {},
    search: ""
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
    .then(res => this.setState({ employees: res.data.results })
    )
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // set search data and run the search function
  };

  render() {
    return (
      <div className="employeeTable">
        <Nav 
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.length > 0 ? 
              this.state.employees.map(thisEmployee => (
                thisEmployee.name.first.includes(this.state.search) 
                ||
                thisEmployee.name.last.includes(this.state.search)
                ||
                thisEmployee.phone.includes(this.state.search)
                ||
                thisEmployee.email.includes(this.state.search)
                 ?
                <Employee
                  key={thisEmployee.id.value}
                  image={thisEmployee.picture.large}
                  name={thisEmployee.name.first + " " + thisEmployee.name.last}
                  phone={thisEmployee.phone}
                  email={thisEmployee.email}
                  dob={thisEmployee.dob.date.substr(0, 10)}
                  newEmail={"mailto:" + thisEmployee.email}
                />
                :
                null
              ))
              : 
              null
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
