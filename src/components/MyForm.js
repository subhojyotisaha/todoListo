import React, { Component } from "react";

export class MyForm extends Component {
  state = {
    name: "Ben Stokes",
    favoritePet: "Tommy",
    checkValue: false,
    title: "Mr.",
  };

  handleChange = (event) => {
    const isChecked = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isChecked
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <textarea
          name="favoritePet"
          value={this.state.favoritePet}
          onChange={this.handleChange}
        />

        <input
          name="checkValue"
          type="checkbox"
          onChange={this.handleChange}
          checked={this.state.checkValue}
        />

        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Miss</option>
            <option>Ms.</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
