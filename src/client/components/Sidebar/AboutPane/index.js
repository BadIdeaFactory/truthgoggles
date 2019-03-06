import React from 'react'
import PropTypes from 'prop-types'

// App Imports

class AboutPane extends React.Component {
  static propTypes = {
    setAboutToggleState: PropTypes.func,
  }

  closeAboutPane = () => {
    const { setAboutToggleState } = this.props
    setAboutToggleState(false)
  }

  render() {
    return (
      <>
        <div>
          About Pane
          <button onClick={this.closeAboutPane}>X</button>
        </div>
      </>
    )
  }
}

export default AboutPane
