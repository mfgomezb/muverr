import React, { Component } from "react";
import ComponentService from "../TransactionService";
import UserService from "../UserService";
import AuthService from "../auth/AuthService";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom' 

const styles = {
  card: {
    minWidth: 275,
    width: '20%'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class TransactionDetails extends Component {
  constructor({ match }) {
    super();
    this.state = {
      redirectToProfile: false,
      loggedInUser: null,
      transaction: {}
    };
    this.match = match;
    this.service = new ComponentService();
    this.AuthService = new AuthService();
    this.UserService = new UserService();
  }

  getTransaction = transactionId => {
    this.service.getTransaction(transactionId).then(data => {
      this.setState({ transaction: data });
    });
  };

  componentWillReceiveProps = props => {
    
    return this.getTransaction(props.match.params.transactionId);

  };

  componentDidMount = () => {
    return this.getTransaction(this.match.params.transactionId);

  };

  changeStatusToInProcess = () => {
    const id = this.state.transaction._id
    const operations = this.state.transaction._id
    const buyer = this.state.loggedInUser._id
    const classification = "IN PROCESS"
    this.service.editTransaction(id, {buyer, classification})
    .then( () => {
    this.UserService.addOperation(buyer, {operations})
    })
    .then( () => {
      this.setState({redirectToProfile: true})
    })
    .catch( error => console.log(error) )
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.AuthService.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }


  render() {

    this.fetchUser()

    const {classes} = this.props
    if (this.state.transaction._id) {
      const {...details} = this.state.transaction;
    if (this.state.redirectToProfile) {
      return (<Redirect to={'/profile'}/>)
    }
  
      return (
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Transaction Details
              </Typography>
              <Typography variant="h5" component="h2">
                Seller: {details.seller.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Rating: ...
              </Typography>
              <Typography component="p">
                Amount: {details.amount}
              </Typography>
              <Typography component="p">
                Rate: {details.rate}
              </Typography>
              <Typography component="p">
                Bolivares: {details.bolivares}
              </Typography>
              <Typography component="p">
                Classification: {details.classification}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" onClick={(e) => this.changeStatusToInProcess(e) }>Buy</Button>
            </CardActions>
          </Card>
      );
    } else return <div />;
  }
}

TransactionDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionDetails);
