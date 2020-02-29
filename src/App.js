import React from 'react';

export default class Example extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json =>{
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }


  render() {
    return (
      <div className="App">

      </div>);
  }
}
