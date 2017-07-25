import React, { Component } from 'react';
import './App.css';
import User from './components/User';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isCool: false,
      users: []
    }
  }

  handleClick() {
    this.setState({isCool: !this.state.isCool});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ users });
      });
  }

  render() {
    const {
      isCool,
      users
    } = this.state;
    return (
      <div className="App">
        <h2>Hello React Class</h2>
        <h3>{users.length}</h3>
        <p>{isCool ? 'Dan is Cool' : 'Dan is not Cool?'}</p>
        <button onClick={this.handleClick}>Toggle is Cool</button>
        {users.map(user => (
          <User
            key={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
            quote={user.company.catchPhrase}
          />
        ))}
      </div>
    );
  }
}

export default App;
