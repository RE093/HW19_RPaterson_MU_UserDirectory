import React from 'react';
import Employee from "./components/Employee";
import Nav from "./components/Nav";
import employees from "./Employees.json";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

// add in search function using the search bar,
// add in where you click a name, it filters it alphabetically or numerically

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
              image={thisEmployee.image}
              name={thisEmployee.name}
              phone={thisEmployee.phone}
              email={thisEmployee.email}
              dob={thisEmployee.dob}
            />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
