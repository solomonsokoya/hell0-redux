import React, {Component} from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import {connect} from 'react-redux';
import {nameChange} from './reducers'

const mapStateToProps = state => {
  return {state}
}
const mapDispatchToProps = dispatch => ({
  changeName: res => dispatch(nameChange(res.target.dataset.btn))
})
class App extends Component {
  render() {
    console.log(this.props.state.tech)
    return (
      <div>
      <HelloWorld key={1} tech={this.props.state.tech}/>
      <ButtonGroup key={2} technologies={["React", "Elm", "Reactredux"]} onClick={this.props.changeName}/>
    </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
