import React, { Component } from 'react';
import './User.css';

class User extends Component {
  render() {
    const {
      name,
      email,
      username,
      quote
    } = this.props;
    return (
      <div className="User">
        <ul>
          <li><h2>{name}</h2></li>
          <li><a href={`mailto:${email}`}>{email}</a></li>
          <li className="username">{username}</li>
        </ul>
        <blockquote>
          <p>{quote}</p>
          <small>{name}</small>
        </blockquote>
      </div>
    )
  }
}

User.defaultProps = {
  name: 'Full Name',
  email: 'me@you.com',
  username: 'username123',
  quote: 'my quote is better than you quote...'
}

export default User;
