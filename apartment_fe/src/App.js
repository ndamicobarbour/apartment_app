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
import Apartment from './Apartments'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            apiUrl: "http//localhost:3001",
            apartments: []
        }
    }

  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" render={props => (
                    <div className="App">
                        <Jumbotron>
                            <h1>Apartment Search Database</h1>
                            <p>
                                Find your next home!
                            </p>
                            <p>
                                <Link to='/apartments' id="view_apt"><Button bsStyle="primary" className='pagenav_view'>View Apartments</Button></Link>&nbsp;&nbsp;
                                <Button bsStyle="primary" className='pagenav_add'>Add an Apartment</Button>
                            </p>
                        </Jumbotron>
                        // New Apartments
                    </div>
                )} />

                <Route exact path="/apartments" render={props => (
                    <div className="App">
                        <Jumbotron>
                            <h1>Apartment Search Database</h1>
                            <p>
                                Find your next home!
                            </p>
                            <p>
                                <Button bsStyle="primary" className='pagenav_view'>View Apartments</Button>&nbsp;&nbsp;
                                <Link to='/' id="new_apt"><Button bsStyle="primary" className='pagenav_add'>Add an Apartment</Button></Link>
                            </p>
                        </Jumbotron>
                        <Apartment/>
                    </div>
                )} />

            </div>
        </Router>
    );
  }
}

export default App;
