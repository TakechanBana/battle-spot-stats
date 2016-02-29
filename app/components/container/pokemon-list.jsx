import React, { Component, PropTypes } from 'react'
import Immutable from 'immutable'
import PokemonSmall from './../card/pokemon-small.jsx'
import { sortOptions } from './../../constants/default-contexts.jsx'
import ButtonGroup from './../ui/button-group.jsx'

class PokemonList extends Component {
  constructor(props) {
    super(props)
  }

  _renderPokemonCard(pokemon) {
    return (
      <PokemonSmall pokemon={pokemon} key={pokemon.get('fname')}/>
    )
  }
  render() {
    const { header, actions, pokemonList, sortBy } = this.props
    const getValue = (pokemon, sortBy) => {
      switch (sortBy) {
        case 'rank':
          return pokemon.get(sortBy)
        case 'rate':
          return 100 - pokemon.get(sortBy)
      }
    }
    return (
      <div className='pokemonList'>
        <ButtonGroup
          selected={sortBy}
          onChange={actions.changeSortBy}
          options={sortOptions}
          />
        {pokemonList.sortBy(pokemon => getValue(pokemon,sortBy)).map(this._renderPokemonCard)}
      </div>
    )
  }
}

PokemonList.propTypes = {
  actions: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  pokemonList: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired
}

export default PokemonList
