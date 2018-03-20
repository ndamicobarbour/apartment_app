import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'
import {
    Grid,
    PageHeader,
    Row,
    Col,
    Button, 
    Navbar,
    NavItem,
    Nav,
    Jumbotron
} from 'react-bootstrap'

class Apartment extends Component {
    render() {
        return (
            <div>
                        {this.props.apartments.map((apartment, index) =>{
                            return (
                                <div>
                                    <h4 className='apt-1'>{apartment.address1}</h4>
                                    <h4>{apartment.address2}</h4>
                                    <h4>{apartment.city}</h4>
                                    <h4>{apartment.zip_code}</h4>
                                    <h4>{apartment.state}</h4>
                                    <h4>{apartment.country}</h4>
                                    <h4>{apartment.name}</h4>
                                    <h4>{apartment.phone}</h4>
                                    <h4 className='hours'>{apartment.availability_hours}</h4>
                                </div>
                            )
                        })}
            </div>
        );
    }
}

export default Apartment;
