import {Component} from 'react'

import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <UserInfo />
        <BlogList />
      </div>
    )
  }
}

export default Home
