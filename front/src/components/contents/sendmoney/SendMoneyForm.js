import React, { Component } from 'react';

class SendMoneyForm extends Component {
    
    render() {
    return (
        <form onSubmit={e => this.props.handleFormSubmit(e)}>
            <input type="hidden" name="classification" defaultValue={this.props.transaction.classification}/>
            <fieldset>
            <label>Amount:</label>
            <input type="number" name="amount" onChange={ e => this.props.handleChange(e)}/>
            </fieldset>
            <fieldset>
            <label>Rate:</label>
            <input type="number" name="rate"  onChange={ e => this.props.handleChange(e)}/>
            </fieldset>
            <fieldset>
            <label>Currency:</label>
            <select value={this.props.transaction.currency} name="currency" onChange={ e => this.props.handleChange(e)}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
            </fieldset>
            <fieldset>
            <label>Total BsS:</label>
            <input type="number" name="bolivares" defaultValue={this.props.transaction.bolivares} />
            </fieldset>
            <input type="submit" value="Send money" />
        </form>
        )
    }
}

  export default SendMoneyForm;