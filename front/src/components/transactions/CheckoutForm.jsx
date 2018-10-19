import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import AuthService from '../auth/AuthService.js'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ComponentService from "../TransactionService";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import '../../stylesheets/style.scss'



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

class CheckoutForm extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      complete: false,
      transaction: {},
    };
    this.submit = this.submit.bind(this);
    this.service = new AuthService()
    this.txservice = new ComponentService();
  }

  getTransaction = transactionId => {
    this.txservice.getTransaction(transactionId).then(data => {
      this.setState({ transaction: data });
    });
  };

  componentDidMount = () => {
    return this.getTransaction(this.props.txId);
  };

  changeStatusToInPaid = () => {
    const id = this.state.transaction._id
    const classification = "PAID"
    this.txservice.payTransaction(id, {classification})
    .then( () => {
      this.setState({redirectToProfile: true})
    })
    .catch( error => console.log(error) )
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await this.service.payment(token)
    .then( response => {
      if (response.ok) {
        this.setState({complete: true})
      }
    })
    .then( () => {
      if (this.state.complete) {
        this.changeStatusToInPaid()
      }
    })
    .catch(e => console.log(e))
  }
  
  
  render() {



    const {classes} = this.props
    



    if (this.state.complete) {
        
        return <h1>Purchase Complete</h1>


    } else if (this.state.transaction._id) {
      
      const {...details} = this.state.transaction;
      
      return (
        
        <Paper className="checkout">
        
            <div className='paymentHolder'>
              <h1>Checkout</h1>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Transaction Details
              </Typography>
              <Typography variant="h5" component="h2">
                Seller: {details.seller.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Rating: {details.rating}
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
              </div>
            <div className='paymentHolder'>
              <Typography variant="h6" gutterBottom>
              Please enter your payment details
              </Typography>
              <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                  <TextField required id="cardName" label="Name on card" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField required id="billingAdress" label="Billing Address" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardElement fullWidth/>
                </Grid>
                <Grid item xs={12}>
                </Grid>
              </Grid>
            <button onClick={this.submit}>Complete payment</button>
            </div>
          
        </Paper>
        
      );
    } else {
      return ''
    }
  }
}


export default injectStripe(withStyles(styles)(CheckoutForm));