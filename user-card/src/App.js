import './App.css';
import React from 'react'
import axios from 'axios'

import UserCard from './components/UserCard'
import Followers from './components/Followers'

class App extends React.Component {
  state = {
    data: [],
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/aldenho52`)
      .then(res => {
        console.log(res)
        this.setState({ data: res.data })
      })
      .catch(err => {
        console.log(err)
      })
    axios.get(`https://api.github.com/users/aldenho52/followers`)
      .then(res => {
        console.log(res)
        this.setState({ followers: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <div className="App">
        <h1 className='title'>Github User Card</h1>
        <UserCard data={this.state.data} />
        <div>
          <Followers followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
