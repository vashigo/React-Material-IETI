import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Login from '../src/components/Login';
import TodoApp from '../src/components/TodoApp';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'


import Button from '@material-ui/core/Button';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn : false
        };
        this.signOff = this.signOff.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    async componentDidMount(){
        if(localStorage.getItem('isLoggedIn')){
            this.setState({isLoggedIn: true});
        }else{
            this.setState({isLoggedIn: false});
        }
    }

    async signOff(){
        await localStorage.clear();
        await localStorage.setItem('isLoggedIn', false)

        this.setState({isLoggedIn: false});
    }

    signIn(){
        this.setState({isLoggedIn: true});
    }

    render() {

        const LoginView = () => (
            <Login signIn = {this.signIn}/>
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
                        {localStorage.getItem("isLoggedIn") === "true" && 
                        <Button
                                variant="contained"
                                color="primary"
                                className="signOff-header"
                                onClick={this.signOff}
                            >  
                            Sign off
                        </Button>}
                    </header>
                        <br/>
                        <br/>
                    <body>
                        <div>
                            {this.state.isLoggedIn && localStorage.getItem("isLoggedIn") === "true" ? <Redirect to="/todo" /> : <Redirect to="/" />}
                            <Switch>
                                <Route exact path="/" component={LoginView}/>
                                <Route exact path="/todo" component={TodoAppView}/>
                            </Switch>
                        </div>
                    </body>


                </div>
            </Router>
        );
    }

}

export default App;
