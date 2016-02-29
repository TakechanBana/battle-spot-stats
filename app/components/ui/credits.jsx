import React, { Component, PropTypes } from 'react'

require('./credits.less')

class Credits extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="credits">
        Data fetched {this.props.date} from the <a href={'http://3ds.pokemon-gl.com'}>PGL</a>.
        View on <a href={'http://github.com/dianjin/battle-spot-stats'}>GitHub</a>.
      </div>
    )
  }
}

Credits.propTypes = {
  date: PropTypes.string.isRequired
}

export default Credits
