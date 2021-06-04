import React from "react";
import "./App.css";

export default class MeGusta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      name: "Me gusta",
      classImg: "far fa-heart untoggled"
    };
  }

  handleClick = () => {
    this.setState({
      toggled: this.state.toggled ? false : true,
      name: this.state.toggled ? "Ya no me gusta" : "Me gusta",
      classImg: this.state.toggled ? "fas fa-heart toggled" : "far fa-heart"
    });
  };

  render() {
    return (
      <div className="button-container">
        <button onClick={this.handleClick}>
          <i className={this.state.classImg}></i>
          {this.state.name}
        </button>
      </div>
    );
  }
}
