import React, {Component} from 'react'
import '../../stylesheets/style.scss'


class Home extends Component {
  render() {
    const {classes} = this.props
    console.log(classes)
    return (
        <div className='home-back'>
            <div className='send'>Send money to your family</div>
            <div className='receive'>Protect your work and savings</div>
        </div>
    )
  }
}


export default Home