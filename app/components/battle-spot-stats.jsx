import React, { Component, PropTypes } from 'react'
import 'react-select/dist/react-select.css'
import Immutable from 'immutable'
import Pokemon from './container/pokemon.jsx'
import PokemonList from './container/pokemon-list.jsx'
import ContextSelect from './ui/context-select.jsx'
import Credits from './ui/credits.jsx'
import { searchContexts } from './../constants/default-contexts.jsx'

require('./battle-spot-stats.less')

var Select = require('react-select')

class BattleSpotStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: undefined,
      searchContexts
    }
  }
  shouldComponentUpdate(newProps, newState) {
    if (this.props.context !== newProps.context) {
      this.state.selectedValue = undefined
    }
    return true
  }
  _updateValue(value) {
    this.setState({
      selectedValue: value,
    });
  }
  _renderInformation(context, selected, sortBy, actions) {
    const selectedNode = this.props.dex.getIn([context, selected])
    switch (context) {
      case 'Pokemon':
        return (
          <Pokemon pokemon={selectedNode} />
        )
      default:
        return (
          <PokemonList
            header={selected}
            pokemonList={selectedNode}
            actions={actions}
            sortBy={sortBy}
            />
        )
    }
  }
  render() {
    const {actions, context, date, options, selected, sortBy } = this.props
    var selectedKey = this.state.selectedValue ? this.state.selectedValue.value : selected
    return (
      <div className='battleSpotStats'>
        <h3>Battle Spot Special</h3>
        <ContextSelect
          contexts={this.state.searchContexts}
          selected={context}
          onChange={actions.changeSelected}
          />
        &nbsp;
        <Credits date={date}/>
        <Select
          name='pokemon'
          value={selectedKey}
          onChange={this._updateValue.bind(this)}
          options={options.get(this.props.context)}
          clearable={false} />
        {this._renderInformation.bind(this, context, selectedKey, sortBy, actions)()}
      </div>
    );
  }
}

BattleSpotStats.propTypes = {
  actions: PropTypes.object,
  context: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Immutable.Map).isRequired,
  dex: PropTypes.instanceOf(Immutable.Map).isRequired
}

export default BattleSpotStats
