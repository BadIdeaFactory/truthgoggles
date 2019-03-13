import React from 'react'
import PropTypes from 'prop-types'

// App imports
import logo from '../../images/logo.png'

class Branding extends React.Component {
  render() {
    return (
      <>
        <div>
          <img
            alt="Truth Goggles: Language Checker"
            src={logo}
            width="200"
          />
        </div>
      </>
    )
  }
}

export default Branding
