import { Component } from "react";

class AnotherImg extends Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

export default AnotherImg;
