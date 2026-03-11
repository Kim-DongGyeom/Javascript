import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Kim', age: 30 };
  }

  changeName = () => {
    this.setState({ name: 'Park' });
  };

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>{this.state.age}</p>
        <button
          onClick={() => {
            // this.setState({ name: 'park' });
            this.changeName();
          }}
        >
          btn
        </button>
      </div>
    );
  }
}

export default Profile;
