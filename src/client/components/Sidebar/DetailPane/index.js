import React from 'react'
import PropTypes from 'prop-types'

// App Imports
import { phraseType } from '../../../types'
import FlagDetail from './FlagDetail'
import FlagChart from './FlagChart'


class DetailPane extends React.Component {
  static propTypes = {
    selectedPhrase: phraseType,
  }

  render() {
    const { selectedPhrase } = this.props
    return (
      <>
        <div>
          <FlagDetail
            selectedPhrase={selectedPhrase}
          />
          <FlagChart
            selectedPhrase={selectedPhrase}
          />
        </div>
      </>
    )
  }
}

export default DetailPane
