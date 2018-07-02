import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store";
import { connect } from 'react-redux';
import setTechnology from './actions';

const mapDispatchToProps = dispatch =>({

handleNameChange: (event) => {
  console.log(event + 'hi')
  const tech = event.target.dataset.btn;

  store.dispatch(setTechnology(tech));
  }
})
class App extends Component {




  render() {
    console.log(store.getState())
    return [

      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "Reactredux"]}/>

  ];
  }
}

export default connect(mapDispatchToProps)(App);
