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
import {Link} from 'react-router-dom'
import _ from 'lodash'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

    render() {
        let {...details} = this.state.user
        const {classes} = this.props
        let operation = details.operations
        console.log(operation)
      return (
        <div>
              
        
           { operation ? operation.map((e, i) => <li key={i}>{e.classification}</li>) : <p>Loading...</p>}
              
              //   if(operation.hasOwnProperty(key))
              //   {
              //     return (
              //       <Card className={classes.card}>
              //       <CardContent>
              //         <Typography className={classes.title} color="textSecondary" gutterBottom>
              //         </Typography>
              //       </CardContent> 
              //       <CardActions>
              //         <Button size="medium" onClick={(e) => this.changeStatusToInProcess(e) }>Buy</Button>
              //       </CardActions>
              //     </Card>
              //     )
              //   }})
              // }
            // <div>Name: {details.name}</div>
            // <div>Username: {details.username}</div>
            // <div>Email: {details.email}</div>
            // <div>Address: {details.country}</div>
            // <div>Join date: {(new Date(details.created_at)).toDateString()}</div>
            
            // <Link to={"/user/edit/"}>Edit</Link>
          
          }
        </div>
      )
    }
  }

  Profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Profile);
