import React, { Component } from 'react';
import MuiThemeProvider from
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM
        this.props.nextStep();
    };

    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email, age, 
            occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title ="Confirm that this correct" />
                    <List>
                        <ListItem 
                        primaryText = "First Name"
                        secondaryText = { firstName }
                        />
                         <ListItem 
                        primaryText = "Last Name"
                        secondaryText = { lastName }
                        />
                         <ListItem 
                        primaryText = "Email"
                        secondaryText = { email }
                        />
                         <ListItem 
                        primaryText = "Age"
                        secondaryText = { age }
                        />
                         <ListItem 
                        primaryText = "Occupation"
                        secondaryText = { occupation }
                        />
                         <ListItem 
                        primaryText = "City"
                        secondaryText = { city }
                        />
                         <ListItem 
                        primaryText = "Bio"
                        secondaryText = { bio }
                        />
                    </List>
        
                    <br/>
                    <RaisedButton
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                    <RaisedButton
                    label="Back"
                    secondary={true}
                    style={styles.button}
                    onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15,
        padding: 2,
    }
}

export default FormUserDetails