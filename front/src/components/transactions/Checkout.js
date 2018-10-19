import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Checkout extends Component {
  constructor(props){
    super(props)
    this.state = {
      txId: this.props.match.params.transactionId
    }
  }
  

  render() {
    return (
      <StripeProvider apiKey="pk_test_TkH6C0gc5rbqXpV8KrqnM68E">
        <div className="example">
          <Elements>
            <CheckoutForm txId={this.state.txId}/>
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;

