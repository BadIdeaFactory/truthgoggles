import React from 'react'
import PropTypes from 'prop-types'

// App imports
import { phraseType } from '../../types'

class Editor extends React.Component {

  static propTypes = {
    articleText: PropTypes.string,
    flaggedPhrases: PropTypes.array,
    selectedPhrase: phraseType,
    flagToggleState: PropTypes.bool,
    setSelectedPhrase: PropTypes.func,
    setArticleText: PropTypes.func,
  }

  handleChangeEvent = (event) => {
    const { setArticleText } = this.props
    const newText = event.target.value
    setArticleText(newText)
  }

  render() {
    const {
      articleText,
      setArticleText,
    } = this.props
    return (
      <>
        <div>
          <textarea
            value={articleText}
            onChange={this.handleChangeEvent}
          />
        </div>
      </>
    )
  }
}

export default Editor
