import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Nav(props) {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="searchBar">
                <FormControl 
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" 
                    onChange={props.handleInputChange}
                    value={props.value}
                />
                <Button 
                    onClick={props.handleFormSubmit} 
                    variant="outline-success">
                        Search
                </Button>
                <DropdownButton id="dropdown-basic-button" title="Sort By">
                    <Dropdown.Item value={"oldest"} onClick={props.handleSortChange}>Age Up</Dropdown.Item>
                    <Dropdown.Item value={"youngest"} onClick={props.handleSortChange}>Age Down</Dropdown.Item>
                    <Dropdown.Item value={"firstName"} onClick={props.handleSortChange}>First Name</Dropdown.Item>
                    <Dropdown.Item value={"lastName"} onClick={props.handleSortChange}>Last Name</Dropdown.Item>
                </DropdownButton>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    );
}