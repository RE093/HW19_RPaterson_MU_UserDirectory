import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


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
            </Form>
        </Navbar.Collapse>
        </Navbar>
    );
}