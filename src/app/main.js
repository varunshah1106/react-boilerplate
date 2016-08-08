import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
// import Colors from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


const styles = {
    container: {
        textAlign: 'center',
        paddingTop: '10%',
        backgroundColor: '#34495e',
        height: '100%',
        width: '100%',
    },
    paper: {
        textAlign: 'center',
        display: 'inline-block',
        padding: '2%',
        width: '40%',
    },
    textfield: {
        margin: '0px',
    },
    raisedbutton: {
        marginTop: '5%',
    },
    logo: {
        width: '40%',
    }
};

const muiTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: '#3D9970',
        primary2Color: '#3D9970',
        //   primary3Color: Colors.lightBlack,
        accent1Color: '#1abc9c',
        secondary1Color: '#3D9970',
        accent1Color: '#1abc9c',
        //   accent3Color: Colors.grey500,
        //   textColor: Colors.deepPurpleA700,
        //   alternateTextColor: Colors.white,
        //   canvasColor: '#34495e',
        //   borderColor: Colors.grey300,
        //   disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
        //   pickerHeaderColor: Colors.cyan500,
    },
});

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {
        const standardActions = (
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleRequestClose}
            />
        );

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    <Paper style={styles.paper} zDepth={1} rounded={false}>
                        <img
                            src="logo.png"
                            style={styles.logo}
                        />
                        <TextField
                            style={styles.textfield}
                            floatingLabelText="Email"
                            fullWidth={true}
                        />
                        <TextField
                            style={styles.textfield}
                            floatingLabelText="Password"
                            fullWidth={true}
                            type='password'
                        />
                        <br />
                        <RaisedButton
                            style={styles.raisedbutton}
                            label="Login"
                            secondary={true}
                            onTouchTap={this.handleTouchTap}
                            fullWidth={true}
                        />
                    </Paper>
                </div>
            </MuiThemeProvider>
    );
  }
}

export default Main;
