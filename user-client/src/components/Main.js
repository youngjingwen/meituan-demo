import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const about = () => <h1>About</h1>
const faq = () => <h1>Faq</h1>

class Main extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/about' component={about} />
          <Route path='/faq' component={faq} />
        </div>
      </Router>
    )
  }
}

export default Main;
