import React, {Component} from 'react'
import UserService from '../UserService'
import ComponentService from '../TransactionService'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import '../../stylesheets/style.scss'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Chat from '../transactions/Chat';


const styles = {

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            profile: true,
  
        };
        
        this.service = new UserService()
        this.transactionService = new ComponentService()
      }

      getUser = id => {
        this.service.getUser(id).then( user => {
          let loggedUser = user[0];
          this.setState({ user: loggedUser});
        });
      };
    
      componentDidMount = () => {
        return this.getUser(this.props.userInSession._id);
      };

      componentWillReceiveProps = () => {
        return this.getUser(this.props.userInSession._id);
      };

      cancelBuyOrder = (buyerId, operId) => {
        this.transactionService.cancelBuyOrder({buyerId, operId})
        .then( () => {
          this.getUser(this.props.userInSession._id);
        })
        .catch( error => console.log(error) )
      }

      cancelSellOrder = (sellerId, operId) => {
        this.transactionService.cancelSellOrder({sellerId, operId})
        .then( () => {
          this.getUser(this.props.userInSession._id);
        })
        .catch( error => console.log(error) )
      }

      paymentRedirect = (id) => {
        console.log(id)
        return <Redirect to={`/checkout/+${id}`}/>
      }

      confirmPayment = (id) => {
        const classification = "CONFIRMED"
        this.transactionService.confirmTransaction(id, {classification})
        .then( () => {
          this.getUser(this.props.userInSession._id);
        })
        .catch( error => console.log(error) )
      }
    

    render() {
      
      if (this.state.user === null) {
        this.getUser(this.props.userInSession._id)
      } 

      let {...details} = this.state.user
      const {classes} = this.props
      let operation = details.operations

      let buys =[];
      let sells = []
      
      if (this.state.user && operation){
        console.log(operation)
        buys = operation.filter(oper => oper.seller._id !== this.props.userInSession._id)
        sells = operation.filter(oper => oper.seller._id === this.props.userInSession._id)
      }

      

      const buyTable = (buys) => {
        return (
          <Paper className={classes.root}>
          <Toolbar><Typography  variant="h6" id="tableTitle"> Buy Operations</Typography></Toolbar>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Amount</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>Bolivares</TableCell>
                  <TableCell>Beneficiary Bank</TableCell>
                  <TableCell>Seller</TableCell>
                  <TableCell>Chat</TableCell>
                  <TableCell>Pay</TableCell>
                  <TableCell>Confirmation Status</TableCell>
                  <TableCell>Rate Tx</TableCell>
                  <TableCell>Cancel</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {buys.map(buy => {
                  return (
                    <TableRow key={buy._id}>
                      <TableCell component="th" scope="row">
                        {buy.amount}
                      </TableCell>
                      <TableCell numeric>{buy.rate}</TableCell>
                      <TableCell numeric>{buy.bolivares}</TableCell>
                      <TableCell numeric>{buy.beneficiaryBank}</TableCell>
                      <TableCell numeric>{buy.seller.username}</TableCell>
                      <TableCell>{(buy.classification !== "OPEN") ? <Button color="primary" size="medium" onClick={(e) => this.chat(buy._id)}><Link className='link-style' to={"/transactionChat/" + buy._id}> Chat </Link></Button> : null}</TableCell>
                      <TableCell>{(buy.classification === 'IN PROCESS') ? <Button color="primary" size="medium"><Link className='link-style' to={"/checkout/" + buy._id}> Pay </Link></Button> : null}</TableCell>
                      <TableCell>{(buy.classification === 'PAID') ? <Button color="primary" size="medium"> Waiting for Confirmation </Button> : null}</TableCell>
                      <TableCell>{(buy.classification === 'CONFIRMED') ?  <Button color="primary" size="medium" onClick={(e) => this.ratePayment(e)}> Rate </Button> : null}</TableCell>
                      <TableCell>{((buy.classification === 'IN PROCESS') || (buy.classification === 'OPEN')) ? <Button color="primary" size="medium" onClick={(e) => this.cancelBuyOrder(this.props.userInSession._id, buy.id)}>Cancel Order</Button> : null}</TableCell>

                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        );
      }

      const sellTable = (sells) => {
        return (
          <Paper className={classes.root}>
          <Toolbar><Typography  variant="h6" id="tableTitle"> Sell Operations</Typography></Toolbar>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Amount</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>Bolivares</TableCell>
                  <TableCell>Beneficiary Bank</TableCell>
                  <TableCell>Seller</TableCell>
                  <TableCell>Chat</TableCell>
                  <TableCell>Confirm Payment</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>Cancel</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sells.map(sell => {
                  return (
                    <TableRow key={sell._id}>
                      <TableCell component="th" scope="row">
                        {sell.amount}
                      </TableCell>
                      <TableCell numeric>{sell.rate}</TableCell>
                      <TableCell numeric>{sell.bolivares}</TableCell>
                      <TableCell numeric>{sell.beneficiaryBank}</TableCell>
                      <TableCell numeric>{sell.seller.username}</TableCell>
                      <TableCell>{(sell.classification !== "OPEN") ? <Button color="primary" size="medium" onClick={(e) => this.chat(sell._id)}><Link className='link-style' to={"/transactionChat/" + sell._id}> Chat </Link></Button> : null}</TableCell>
                      <TableCell>{(sell.classification === 'PAID') ? <Button color="primary" size="medium" onClick={(e) => this.confirmPayment(sell._id)}> Confirm Payment </Button> : null}</TableCell>
                      <TableCell>{(sell.classification === 'CONFIRMED') ?  <Button color="primary" size="medium" onClick={(e) => this.ratePayment(e)}> Rate </Button> : null}</TableCell>
                      <TableCell>{((sell.classification === 'IN PROCESS') || (sell.classification === 'OPEN')) ? <Button color="primary" size="medium" onClick={(e) => this.cancelSellOrder(this.props.userInSession._id, sell.id)}>Cancel Order</Button> : null}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        );
      }

      const profileBox = () => {
        return (
          <Card className='card-style'>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              {details.name}
              </Typography>
              <Typography variant="h5" component="h2">
              {details.username}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              {details.email}
              </Typography>
              <Typography component="p">
              {details.country}
              </Typography>
              <Typography component="p">
              {(new Date(details.created_at)).toDateString()}
              </Typography>
            </CardContent>
            <CardActions>
              <Button><Link to={"/user/edit/"}>Edit</Link></Button>
            </CardActions>
          </Card>
        )
      }
      // <Chat id={this.state.tx}></Chat>

      return (
        <div className='profile-container'>
          <div className='personal-details-container'>
              {profileBox()}
          </div>
          <div className='tx-details-holder'>
            <div className={buyTable}>
              {buyTable(buys)}
            </div>
            <div className={sellTable}>
              {sellTable(sells)}
            </div>
          </div>
        </div>
      )
    }
  }

  Profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Profile);



  // const cardHolder = (e, oper) => {
  //   let a = ''
  //   if (oper === 'buy') {
  //     a = 'buy'
  //   } else {
  //     a = 'sell'
  //   }
  //   let id = e._id

  //   return (
  //     <div className='tx-card'>
  //     <Card className='tx-card-style'>
  //       <CardContent>
  //         <Typography className={classes.title} color="textSecondary" gutterBottom>
  //           {a}
  //         </Typography>
  //         <Typography variant="h5" component="h2">
  //           Seller: {e.seller.name}
  //         </Typography>
  //         <Typography className={classes.pos} color="textSecondary">
  //           Rating: ...
  //         </Typography>
  //         <Typography component="p">
  //           Amount: {e.amount}
  //         </Typography>
  //         <Typography component="p">
  //           Rate: {e.rate}
  //         </Typography>
  //         <Typography component="p">
  //           Bolivares: {e.bolivares}
  //         </Typography>
  //       </CardContent>
  //       <CardActions>
  //         {(e.classification !== "OPEN") ? <Button color="primary" size="medium"><Link className='link-style' to={"/transactionChat/" + id}> Chat </Link></Button> : null} // //
  //         {(a === 'buy' && e.classification === 'IN PROCESS') ? <Button color="primary" size="medium"><Link className='link-style' to={"/checkout/" + id}> Pay </Link></Button> : null}//
  //         {((a === 'sell' || a === 'buy') && e.classification === 'IN PROCESS') ? <Button color="primary" size="medium" onClick={(e) => this.cancelBuyOrder(this.props.userInSession._id, id)}>Cancel Order</Button> : null}
  //         {(a === 'buy' && e.classification === 'PAID' ) ? <Button color="primary" size="medium">Waiting for confirmation</Button> : null} // 
  //         {(a === 'sell' && e.classification === 'PAID') ? <Button color="primary" size="medium" onClick={(e) => this.confirmPayment(id)}>Confirm Payment</Button> : null}
  //         {((a === 'sell' || a === 'buy') && e.classification === 'CONFIRMED') ?  <Button color="primary" size="medium" onClick={(e) => this.ratePayment(e)}> Rate </Button> : null} 
  //       </CardActions>
  //     </Card>
  //     </div>
  //   )
  // }