import React, {Component} from 'react';
import '../App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { withStyles } from "@material-ui/core/styles";

import {Button, TextField, Card, CardContent } from '@material-ui/core';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [],
            text: '',
            priority: 0,
            dueDate: moment().format("YYYY/MM/DD"),
            selectedDate: moment()
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card} variant="outlined">
                    <CardContent>
                        <form>
                        <h3>New TODO</h3>

                        <div>
                            <div>
                                <label htmlFor="text" className="right-margin">
                                    Text:
                                </label>
                            </div>
                            <TextField
                                required
                                label="Text"
                                id="outlined-margin-none"
                                defaultValue="Default Value"
                                className={classes.textField,"textField"}
                                variant="outlined"
                                onChange={this.handleTextChange}
                                value={this.state.text}
                            />
                        </div>
                        <br/>
                        <div>
                            <div>
                                <label htmlFor="text" className="right-margin">
                                    Priority:
                                </label>
                            </div>
                            <TextField
                                required
                                id="standard-number"
                                label="Number"
                                type="number"
                                value={this.state.priority}
                                className="textField"
                                onChange={this.handlePriorityChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <br/>
                        <br/>
                        <div>
                            <div>
                                <label htmlFor="text" className="right-margin">
                                    Fecha:
                                </label>
                            </div>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker
                                    disableFuture
                                    format="YYYY/MM/DD"
                                    className="textField"
                                    value={this.state.selectedDate}
                                    inputValue={this.state.dueDate}
                                    onChange={this.handleDateChange}
                                />
                            </MuiPickersUtilsProvider>


                        </div>
                        <br/>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick ={this.handleSubmit}
                        >
                            Add #{this.state.items.length + 1}
                        </Button>
                    </form>
                    </CardContent>
                </Card>

                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
                <br/>
                <br/>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date, value) {
        this.setState(prevState => ({
            selectedDate: date,
            dueDate: value
        }));
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: 0,
            dueDate: moment().format("YYYY/MM/DD"),
            selectedDate: moment()
        }));
    }

}

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    card: {
        width: '500px',
        margin: 'auto'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default withStyles(styles, { withTheme: true })(TodoApp);