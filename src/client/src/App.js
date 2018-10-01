import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { 
  AppBar, 
  Button,
  Divider,
  Grid, 
  Hidden,
  Paper, 
  Toolbar,
  Typography,
} from '@material-ui/core';
import withRoot from './withRoot';
import samples from './samples';
import unified from 'unified';
import parse from 'rehype-parse';
import stringify from 'rehype-stringify';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const sections = [ 'Thing1', 'Thing2' ];
const posts = samples.map((post) => { return post.body; });
/*
// Going to need to make the entire render function asynchronous
// in order to accommodate async behavior on the part of
// the processor.
//
// Which is fine, since we have to do that to fetch data from the API anyway.
let processHTML = async (body) => {
  let processor = unified().use(parse).use(stringify);
  return processor.process(body);
}
const postPromises = samples.map(async (post) => {
  let result = await processHTML(post.body);
  //console.log(result);
  return result;
});
const postResults = Promise.all(postPromises); 
const posts = postResults.map((result)=> { return result.PromiseValue; });
*/

const social = ['GitHub', 'Twitter', 'Facebook'];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <Typography
              component="h2"
              variant="headline"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
              >
              Terminologist
            </Typography>
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarSecondary}>
            {sections.map(section => (
              <Typography color="inherit" noWrap key={section}>
                {section}
              </Typography>
            ))}
          </Toolbar>
          <main>
            <Paper className={classes.mainFeaturedPost}>
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography variant="display2" color="inherit" gutterBottom>
                      Loaded Language
                    </Typography>
                    <Typography variant="headline" color="inherit" paragraph>
                      Multiple lines of text that form the lede, informing new readers quickly and
                      efficiently about what&apos;s most interesting in this post&apos;s contents…
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            <Grid container spacing={40} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8}>
                <Typography variant="title" gutterBottom>
                  From the Firehose
                </Typography>
                <Divider />
                {posts.map(post => (
                  <div>
                    <Typography>
                      <div dangerouslySetInnerHTML={{__html: post}}></div>
                    </Typography>
                    <Divider></Divider>
                  </div>
                ))}
              </Grid>
              {/* End main content */}
              {/* Sidebar}
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="title" gutterBottom>
                    About
                  </Typography>
                  <Typography>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                  </Typography>
                </Paper>
                <Typography variant="title" gutterBottom className={classes.sidebarSection}>
                  Archives
                </Typography>
                {archives.map(archive => (
                  <Typography key={archive}>{archive}</Typography>
                ))}
                <Typography variant="title" gutterBottom className={classes.sidebarSection}>
                  Social
                </Typography>
                {social.map(network => (
                  <Typography key={network}>{network}</Typography>
                ))}
              </Grid>
              { End sidebar */}
            </Grid>
          </main>
        </div>
        <footer className={classes.footer}>
          <Typography variant="title" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
        </footer>
      </React.Fragment>
    );  
  }
}

export default withRoot(withStyles(styles)(App));
