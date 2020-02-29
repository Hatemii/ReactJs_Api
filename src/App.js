import React from 'react';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(json => {
      this.setState({isLoaded: true, items: json})
    })
  }

  render() {

    var {
      isLoaded,
      items
    } = this.state;

    if (!isLoaded) {
      return <div>Loading ...</div>
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(x => (
              <li
                key={x.id}>
                Name: {x.name} <br />
                Username: {x.username} <br />
                Email: {x.email} <br />

              </li>
            ))}
          </ul>
        </div>);
    }
  }
}
