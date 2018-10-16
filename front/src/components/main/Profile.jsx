// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// });

// class SimpleTabs extends React.Component {
//   state = {
//     value: 0,
//   };

//   handleChange = (event, value) => {
//     this.setState({ value });
//   };

//   render() {
//     const { classes } = this.props;
//     const { value } = this.state;

//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Tabs value={value} onChange={this.handleChange}>
//             <Tab label="Item One" />
//             <Tab label="Item Two" />
//             <Tab label="Item Three" href="#basic-tabs" />
//           </Tabs>
//         </AppBar>
//         {value === 0 && <TabContainer>Item One</TabContainer>}
//         {value === 1 && <TabContainer>Item Two</TabContainer>}
//         {value === 2 && <TabContainer>Item Three</TabContainer>}
//       </div>
//     );
//   }
// }

// SimpleTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleTabs);


import React, {Component} from 'react'
import UserService from '../UserService'
import ComponentService from '../TransactionService'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
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
            user: null
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
        return this.getUser(this.props.yserInSession_.id);
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
        return <Redirect to={`/payment/+${id}`}/>
      }
    

    render() {
        let {...details} = this.state.user
        const {classes} = this.props
        let operation = details.operations

      if (this.state.user == null) {
        this.getUser(this.props.userInSession._id)
      }

      
      const cardHolder = (e, oper) => {
        let a = ''
        if (oper === 'buy') {
          a = 'buy'
        } else {
          a = 'sell'
        }
        let id = e._id
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {a}
              </Typography>
              <Typography variant="h5" component="h2">
                Seller: {e.seller.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Rating: ...
              </Typography>
              <Typography component="p">
                Amount: {e.amount}
              </Typography>
              <Typography component="p">
                Rate: {e.rate}
              </Typography>
              <Typography component="p">
                Bolivares: {e.bolivares}
              </Typography>
            </CardContent>
            <CardActions>
              {(a === 'buy') ? <Button size="medium"><Link to={"/payment/" + id}> Pay </Link></Button> : null}
              {(a === 'sell') ? <Button size="medium" onClick={(e) => this.cancelSellOrder(this.props.userInSession._id, id)}>Cancel Sell</Button> : null}
              {(e.classification !== "OPEN") ? <Button size="medium"><Link to={"/transactionChat/" + id}> Chat </Link></Button> : null}
              {(a === 'buy') ? <Button size="medium" onClick={(e) => this.cancelBuyOrder(this.props.userInSession._id, id)}>Cancel</Button> : null}
            </CardActions>
          </Card>
        )
      }

      return (
        <div>
          <div>
          <Card className={classes.card}>
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
          </div>      
          <div>
           { operation ? operation.map((e, i) => { 
                    if (e.seller._id === this.props.userInSession._id) {
                      return cardHolder(e, 'sell')
                    } else {
                      return cardHolder(e, 'buy')
                    }
                    }) : <p>Loading...</p> 
                    }
          </div>  
        </div>
      )
    }
  }

  Profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Profile);
