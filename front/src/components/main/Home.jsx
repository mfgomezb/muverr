import React, {Component} from 'react'


class Home extends Component {
  render() {
    const {classes} = this.props
    console.log(classes)
    return (
        <div>
            <h1>This is the Home Page Component</h1>
        </div>
    )
  }
}


export default Home