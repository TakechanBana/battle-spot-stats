import React from 'react';
import ReactDOM from 'react-dom'
import BattleSpotStats from './components/battle-spot-stats.jsx';
import { createStore, bindActionCreators } from 'redux';
import counter from './reducers/index.jsx';
import { dex, options, date } from './pokedex.jsx'
import { Provider, connect } from 'react-redux'
import Immutable from 'immutable'
import * as Actions from './actions/actions.jsx'
require("./main.less")

// Store
let store = createStore(counter)

// Map redux state to component props
function mapStateToProps(state) {
  return {
    context: state.context,
    selected: state.selected,
    sortBy: state.sortBy,
    dex: dex,
    options: options,
    date: date
  }
}

// Map redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

function getPokedex() {
  var options = pokedex.reduce((currentState, currValue, key) => {
    var elem = {
      label: currValue.getIn(['info', 'fname']),
      value: key
    };
    return currentState.push(elem)
  }, Immutable.fromJS([]));
  return {
    pokedex,
    itemdex,
    abilitydex,
    movedex,
    options
  }
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleSpotStats)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
