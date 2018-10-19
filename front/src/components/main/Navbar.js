import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


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



    if (this.state.loggedInUser) {
      return (
        <div >
          <AppBar className='navbar' position="static">
            <Toolbar>
              <Button className='navbar'><Link className='link-style link-color' to='/'><b>MUVERR</b></Link></Button>
              <Button><Link className='link-style link-color' to='/transactions'>Market</Link></Button>
              <Button><Link className='link-style link-color' to='/sendmoney'>Send Money</Link></Button>
              <Button><Link className='link-style link-color' to='/profile'>Dashboard</Link></Button>
              <Button><Link className='link-style link-color' to='/' onClick={e => this.handleLogout(e)}>Logout</Link></Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    } else {
      return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Button className='navbar'><Link className='link-style link-color' to='/'><b>MUVERR</b></Link></Button>
              <Button><Link className='link-style link-color' to='/signup'>Signup</Link></Button>
              <Button><Link className='link-style link-color' to='/login'>Login</Link></Button>
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
