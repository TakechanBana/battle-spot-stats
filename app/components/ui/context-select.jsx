import React, { Component, PropTypes } from 'react'

require('./context-select.less')

class ContextSelect extends Component {
  constructor(props) {
    super(props)
  }

  _renderContextButton(context) {
    var isBold = this.props.selected === context
    return (
      <a
        key={context}
        style={{'fontWeight' : isBold? 'bold': 'normal'}}
        onClick={() => this.props.onChange(context)}>
        {context}
      </a>
    )
  }

  render() {
    return (
      <div className="contextSelect">
        Search by:
        {this.props.contexts.map(this._renderContextButton.bind(this))}
      </div>
    )
  }
}

ContextSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  contexts: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ContextSelect
