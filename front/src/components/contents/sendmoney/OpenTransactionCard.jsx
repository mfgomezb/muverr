import React, { Component } from "react";
import DeleteTransaction from "./DeleteTransaction";
import EditTransaction from "./EditTransaction";
import ComponentService from "../ComponentService";

class OpenTransactionCard extends Component {
  service = new ComponentService();

  handleOnClick = e => {
    let id = this.props.id;
    let key = e.target.name;
    if (key === "delete") {
      this.service.deleteTransaction(id);
    }
  };

  render() {

    return (
      <div>
        <div>Status: {this.props.classification}</div>
        <div>Amount: {this.props.amount}</div>
        <div>Currency: {this.props.currency}</div>
        <div>Bolivares: {this.props.bolivares}</div>
        <div>Rate: {this.props.rate}</div>
        <DeleteTransaction
          onClick={e => {
            this.props.toggleActive();
            this.props.getStatus();
            this.handleOnClick(e);
          }}
          id={this.props.id}
        />
        <EditTransaction
          name="edit"
          onClick={e => this.handleOnClick(e)}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default OpenTransactionCard;
