import React, { Component } from 'react'
import Home from './Home'

import {
  Route
} from 'react-router-dom'

const Order = () => <h1>Order</h1>
const Mine = () => <h1>Mine</h1>

class Main extends Component {
  render() {
    return(
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/mine" component={Mine} />
      </div>
    )
  }
}

export default Main
