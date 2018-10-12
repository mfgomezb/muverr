
import React, { Component } from 'react';

class DeleteTransaction extends Component {
    constructor(props){
        super()
    }
    render() {
    return (
            <button name="delete" onClick={ (e) => this.props.onClick(e) }>Delete</button>
        )
    }
}

  export default DeleteTransaction;