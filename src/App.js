import React from 'react';
import Employee from "./components/Employee";
import Nav from "./components/Nav";
import employees from "./Employees.json";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

// add in search function using the search bar,
// add in where you click a name, it filters it alphabetically or numerically

// loop through the array, 
// if employee[i].name.includes(search value) return value and render

// to sort the employees alphabetically
// employee.name.sort()

class App extends React.Component {

  state = {
    employees
  };

  render() {

    return (
      <div className="employeeTable">
        <Nav />
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
            {this.state.employees.map(thisEmployee => (
              <Employee
                key={thisEmployee.name}
                image={thisEmployee.image}
                name={thisEmployee.name}
                phone={thisEmployee.phone}
                email={thisEmployee.email}
                dob={thisEmployee.dob}
                newEmail={"mailto:" + thisEmployee.email}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
