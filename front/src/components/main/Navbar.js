import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }


  render() {

    const { classes } = this.props;

    if (this.state.loggedInUser) {
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Button color="inherit"><Link to='/'>Home</Link></Button>
              <Button color="inherit"><Link to='/transactions'>Market</Link></Button>
              <Button color="inherit"><Link to='/sendmoney'>Send Money</Link></Button>
              <Button color="inherit"><Link to='/profile'>Profile</Link></Button>
              <Button color="inherit"><Link to='/' onClick={e => this.handleLogout(e)}>Logout</Link></Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    } else {
      return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Button color="inherit"><Link to='/signup'>Signup</Link></Button>
              <Button color="inherit"><Link to='/login'>Login</Link></Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
