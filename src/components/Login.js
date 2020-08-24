import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'

export class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn : false,
            username: "",
            password: ""
        };
        this.verificateUser = this.verificateUser.bind(this);
        this.verificate = this.verificate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem('isLoggedIn')){
            this.setState({isLoggedIn: true});
        }else{
            this.setState({isLoggedIn: false});
        }
        localStorage.setItem('username', "andres");
        localStorage.setItem('password', "12345");
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    verificateUser(){
        if(localStorage.getItem('username') && localStorage.getItem('password')){
            if((localStorage.getItem('username') === this.state.username && 
                localStorage.getItem('password') === this.state.password)){
                localStorage.setItem('isLoggedIn', true)
                this.props.signIn();
            }else{
                alert("Usuario no esta registrado!!");
            }
            
        }
    }

    verificate(){
        if(this.state.username === "" && this.state.password === ""){
            alert("Llene todo los campos!!");
        }else{
            this.verificateUser();
        }
    }

    render(){

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="username"
                                    autoComplete="email"
                                    autoFocus
                                    value={this.state.username} 
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password} 
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <Button
                                
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.verificate}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}

export default Login;