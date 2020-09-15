import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Jumbotron from 'react-bootstrap/Jumbotron';


export default function Nav(props) {
    return (
        <div>
            <Jumbotron className="jumbo">
                <div className="jumboText">
                <h1>Employee Directory</h1>
                </div>
            </Jumbotron >
            <Navbar bg="light" expand="lg" className="navbarClass">
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
                </Form>
            </Navbar.Collapse>
            <DropdownButton id="dropdown-basic-button" variant="outline-info" title="Sort By" drop="left">
                        <Dropdown.Item as="button" value="oldest" onClick={props.handleSortChange}>Age Up</Dropdown.Item>
                        <Dropdown.Item as="button" value="youngest" onClick={props.handleSortChange}>Age Down</Dropdown.Item>
                        <Dropdown.Item as="button" value="firstName" onClick={props.handleSortChange}>First Name</Dropdown.Item>
                        <Dropdown.Item as="button" value={"lastName"} onClick={props.handleSortChange}>Last Name</Dropdown.Item>
                    </DropdownButton>
            </Navbar>
        </div>
    );
}