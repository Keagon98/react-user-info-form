import React, { Component } from 'react';
import MuiThemeProvider from
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
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
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title ="Success" />
                   <h1>Thank you for submitting all your information.</h1>
                   <p>We'll be in touch to confirm if your application was successfull.</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}



export default Success