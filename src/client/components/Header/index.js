import React from 'react'
import PropTypes from 'prop-types'

// App Imports
import Branding from './Branding'
import Navigation from './Navigation'


class Header extends React.Component {
  static propTypes = {
    startNewDocument: PropTypes.func.isRequired,
  }

  render() {
    const { startNewDocument } = this.props
    return (
      <>
        <Branding />
        <Navigation
          startNewDocument={startNewDocument}
        />
      </>
    )
  }
}

export default Header
