import React, { Component } from "react";

export class RandomUser extends Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>LOADING.... PLEASE WAIT</div>;
    }

    if (!this.state.people) {
      return <div>RANDOM USER DETAILS NOT ACCESSIBLE</div>;
    }

    const peopleJSX = this.state.people.map((person) => (
      <div key={person.login.uuid}>
        <div>
          {person.name.title}&nbsp;
          {person.name.first}&nbsp;
          {person.name.last}
        </div>
        <div>
          <img src={person.picture.large} alt="" />
        </div>
        <div>
          {person.location.state}
          {","}&nbsp;
          {person.location.country}
        </div>
      </div>
    ));

    return <div>{peopleJSX}</div>;
  }
}

export default RandomUser;
