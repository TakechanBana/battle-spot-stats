import React, { Component, PropTypes } from 'react'
require("./list-data.less")

class ListData extends Component {
  constructor(props) {
    super(props)
  }

  _renderListNode(elem) {
    var rate = elem.rate + '%'
    var name = elem.name
    return (
      <div key={name} className='-listItem'>
        <span className='-label'>{name}</span>
        <span className='-container'>
          <span className='-bar' style={{'width': rate}}></span>
        </span>
        <span className='-rate'>{rate}</span>
      </div>
    )
  }

  render() {
    var { options, header, color } = this.props
    return (
      <div className='listData'>
        <h1>{header}</h1>
          {options.map(this._renderListNode.bind(this))}
      </div>
    )
  }
}

ListData.propType = {
    header: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ListData
