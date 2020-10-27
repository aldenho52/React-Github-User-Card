import './App.css';
import React from 'react'
import axios from 'axios'

import UserCard from './components/UserCard'
import Followers from './components/Followers'

class App extends React.Component {
  state = {
    username: 'aldenho52',
    data: [],
    followers: []
  }

  fetchData = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        console.log(res)
        this.setState({ data: res.data })
      })
      .catch(err => {
        console.log(err)
      })
      axios.get(`https://api.github.com/users/${username}/followers`)
      .then(res => {
        console.log(res)
        this.setState({ followers: res.data })
        console.log(this.state.followers)
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchData(this.state.username)
  }



  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.fetchData(this.state.username)
    this.setState({ username: '' })
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Github User Card</h1>
        <UserCard data={this.state.data} />
        <form onSubmit={this.handleSearch}>
          <input type='text' placeholder='username' onChange={this.handleChange} value={this.state.username} />
          <button>Change User</button>
        </form>
        <div>
          <Followers followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
