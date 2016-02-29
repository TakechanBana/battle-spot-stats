import React, { Component, PropTypes } from 'react'
import Immutable from 'immutable'
import ListData from './../ui/list-data.jsx'
import classNames from 'classnames'
import imageUtils from './../../utils/image-utils.jsx'

require('./container.less')

class Pokemon extends Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !Immutable.is(this.props.pokemon, nextProps.pokemon)
  }
  _renderListData(list, header) {
    return (
      <ListData
        options={list.toJS()}
        header={header}
      />)
  }
  render() {
    var pokemon = this.props.pokemon
    var info = pokemon.get('info')
    var moves = pokemon.get('moves')
    var natures = pokemon.get('natures')
    var abilities = pokemon.get('abilities')
    var items = pokemon.get('items')
    var types = info.get('typeIds').toArray();
    var rank = info.get('rank')
    var imgKey1 = info.get('imgKey1')
    return (
      <div className="Pokemon">
        <table>
          <tr>
            <td
              className={classNames('pokemonCardBanner', '-large')}
              rowSpan='2'
              style={imageUtils.getBackgroundImageFromImgKey1(imgKey1)}
              >
              {types[0]}
            </td>
            <td>{this._renderListData(items, 'Items')}</td>
            <td>{this._renderListData(moves, 'Moves')}</td>
          </tr>
          <tr>
            <td>{this._renderListData(abilities, 'Abilities')}</td>
            <td>{this._renderListData(natures, 'Natures')}</td>
          </tr>
        </table>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.instanceOf(Immutable.Map).isRequired
}

export default Pokemon
