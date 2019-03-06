// Imports
import React from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'

// App Imports
import Header from './Header'
import Sidebar from './Sidebar'
import Editor from './Editor'

// Component
class App extends React.Component {
  state = {
    articleText: "",
    flaggedPhrases: [],
    selectedPhrase: {},
    flagToggleState: false
  }

  setArticleText = (articleText) => {
    this.setState({ articleText })
  }

  setFlaggedPhrases = (flaggedPhrases) => {
    this.setState({ flaggedPhrases })
  }

  setSelectedPhrase = (selectedPhrase) => {
    this.setState({ selectedPhrase })
  }

  setFlagToggleState = (flagToggleState) => {
    this.setState({ flagToggleState })
  }

  startNewDocument = () => {}

  render() {
    const {
      articleText,
      flaggedPhrases,
      selectedPhrase,
      flagToggleState
    } = this.state

    return (
      <>
        <BrowserRouter>
          <div id="main">
            <Header
              startNewDocument={this.startNewDocument}
            />
            <Route
              path="/"
              render={props => (
                <Editor
                  articleText={articleText}
                  flaggedPhrases={flaggedPhrases}
                  selectedPhrase={selectedPhrase}
                  flagToggleState={flagToggleState}
                  setSelectedPhrase={this.setSelectedPhrase}
                  setArticleText={this.setArticleText}
                  {...props}
                />
              )}
            />
            <Sidebar
              flaggedPhrases={flaggedPhrases}
              selectedPhrase={selectedPhrase}
              flagToggleState={flagToggleState}
              setFlagToggleState={this.setFlagToggleState}
              setSelectedPhrase={this.setSelectedPhrase}
            />
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App
