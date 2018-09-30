import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Grid, CssBaseline } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <Grid container spacing={16}>
          <Grid item xs={2}>
            <Paper>
              <Button variant="raised" color="primary">
                Hello World
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              Hey this is just some text
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );  
    /*
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    */
  }
}

export default App;
