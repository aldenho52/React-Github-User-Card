import './App.css';
import React from 'react'
import axios from 'axios'

import UserCard from './components/UserCard'

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
        <h1>Github User Card</h1>
        <UserCard data={this.state.data} />
        <div>
          <h2>Followers</h2>
        </div>
      </div>
    );
  }
}

export default App;
