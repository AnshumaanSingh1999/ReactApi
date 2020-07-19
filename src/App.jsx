import React from "react";
import Contacts from "./components/Contacts";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: null,
    };
  }

  componentDidMount() {
    fetch("https://api.thevirustracker.com/free-api?global=stats")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
        console.log(data);
      })
      .catch((e) => console.log(e));
  }

  render() {
    return !this.state.contacts ? null : (
      <Contacts contacts={this.state.contacts} />
    );
  }
}

export default App;
