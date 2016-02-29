import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

require('./button-group.less')

class ButtonGroup extends Component {
  constructor(props) {
    super(props)
  }

  _renderButton(option) {
    return (
      <a
        key={option}
        onClick={() => this.props.onChange(option)}
        className={classNames({'-selected': option === this.props.selected})}>
        {option}
      </a>
    )
  }

  render() {
    return (
      <div className='buttonGroup'>
        <span className='-label'>Sort by:</span>
        {this.props.options.map(this._renderButton.bind(this))}
      </div>
    )
  }
}

ButtonGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ButtonGroup
