import React, {Component} from 'react'
import ComponentService from '../ComponentService'


class Transactions extends Component {
    constructor(){
        super()
        this.state = {
            transactions: []
        }
        this.service = new ComponentService()
    }

    componentDidMount() {
        this.service.openTransactions.then((data) => {
            if (data.error) {
            console.log(data.error)
            } else {
            console.log(data)
            this.setState({transactions: data})
            }
        })
    }

    render() {

    return (
            <div>
                <h1>Transactions</h1>
            </div>
        )
    }
    }

export default Transactions