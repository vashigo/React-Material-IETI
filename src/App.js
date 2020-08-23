import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Login from '../src/components/Login';
import TodoApp from '../src/components/TodoApp';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn : false,
        };
    }


    render() {

        const LoginView = () => (
            <Login/>
        );
      
        const TodoAppView = () => (
                <TodoApp/>
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                        <br/>
                        <br/>
                    <body>
                        <div>
                            {!this.state.isLoggedIn && <Route exact path="/" component={LoginView}/>}
                            {this.state.isLoggedIn && <Route path="/todo" component={TodoAppView}/>}
                        </div>
                    </body>


                </div>
            </Router>
        );
    }

}

export default App;
