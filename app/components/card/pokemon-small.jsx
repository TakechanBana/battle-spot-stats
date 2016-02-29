import React, { Component, PropTypes } from 'react'
import Immutable from 'immutable'
import classNames from 'classnames'
import imageUtils from './../../utils/image-utils.jsx'

require('./pokemon-small.less')

class PokemonSmall extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      const pokemon = this.props.pokemon.toJS()
      const { fname, imgKey1, rank, rate } = pokemon
      const percent = rate + '%'
      return (
        <div className='pokemonSmall'>
          <span className='-image' style={imageUtils.getBackgroundImageFromImgKey1(imgKey1)}>{rank}</span>
          <span className='-label'>
            {fname}
            <span className='-bar' style={{'width': percent}}>{percent}</span>
          </span>
        </div>
      )
    }
}

PokemonSmall.propTypes = {
  pokemon: PropTypes.instanceOf(Immutable.Map)
}

export default PokemonSmall
