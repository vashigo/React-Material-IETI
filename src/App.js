import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Login from '../src/components/Login';
import TodoApp from '../src/components/TodoApp';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 

        };
    }


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <Login/>
                <br/>
                <br/>
                <TodoApp/>
            </div>
        );
    }

}

export default App;
