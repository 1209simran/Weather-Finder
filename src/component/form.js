import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.loadWeather}>
        <input type="text" name="city" placeholder="Enter City" />
        <input type="text" name="country" placeholder="Enter Country" />
        <button>Find Weather</button>
      </form>
    );
  }
}

export default Form;
