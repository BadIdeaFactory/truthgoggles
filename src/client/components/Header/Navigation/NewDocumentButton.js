import React from 'react'
import PropTypes from 'prop-types'

// App imports

class NewDocumentButton extends React.Component {
  static propTypes = {
    startNewDocument: PropTypes.func.isRequired,
  }

  showNewDocumentPrompt = () => {
    // For now there is no prompt.
    const { startNewDocument } = this.props
    startNewDocument()
  }

  render() {
    return (
      <>
        <button onClick={this.showNewDocumentPrompt}>New Document</button>
      </>
    )
  }
}

export default NewDocumentButton
