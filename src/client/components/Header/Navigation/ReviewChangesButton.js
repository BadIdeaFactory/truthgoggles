import React from 'react'
import PropTypes from 'prop-types'

// App imports

class ReviewChangesButton extends React.Component {
  static propTypes = {
    setReviewToggleState: PropTypes.func.isRequired,
  }

  showReviewInterface = () => {
    const { setReviewToggleState } = this.props
    setReviewToggleState(true)
  }

  render() {
    return (
      <>
        <button onClick={this.showReviewInterface}>Review Changes</button>
      </>
    )
  }
}

export default ReviewChangesButton
