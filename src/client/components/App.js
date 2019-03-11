// Imports
import React from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

// App Imports
import Header from './Header'
import Sidebar from './Sidebar'
import Editor from './Editor'

// Styles
const HeaderWrapper = styled.div`
  margin: 70px 40px;
`

const BodyWrapper = styled.div`
`

const EditorWrapper = styled.div`
`

const SidebarWrapper = styled.div`
`

// Component
class App extends React.Component {
  state = {
    articleText: "",
    flaggedPhrases: [],
    selectedPhrase: {},
    flagToggleState: false,
    aboutToggleState: false,
    reviewToggleState: false,
  }

  getFlaggedPhrases(sourceText) {
    const { articleText } = this.state

    // Eventually this will be an API call.
    // Until then we simulate with a promise.
    return new Promise((resolve, reject) => {
      const flaggedPhrases = [
        {
          id: 0,
          text: "pants",
          dCount: Math.random() * 100,
          rCount: Math.random() * 100,
        }
      ]
      resolve(flaggedPhrases)
    })
  }

  setArticleText = (articleText) => {
    this.setState({ articleText })
    this.getFlaggedPhrases(articleText)
      .then((flaggedPhrases) => {
        this.setFlaggedPhrases(flaggedPhrases)
      })
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

  setAboutToggleState = (aboutToggleState) => {
    this.setState({ aboutToggleState })
  }

  setReviewToggleState = (reviewToggleState) => {
    this.setState({ reviewToggleState })
  }

  startNewDocument = () => {
  }

  render() {
    const {
      articleText,
      flaggedPhrases,
      selectedPhrase,
      flagToggleState,
      aboutToggleState,
    } = this.state

    return (
      <>
        <BrowserRouter>
          <div id="main">
            <HeaderWrapper>
              <Header
                startNewDocument={this.startNewDocument}
                setAboutToggleState={this.setAboutToggleState}
                setReviewToggleState={this.setReviewToggleState}
              />
            </HeaderWrapper>
            <BodyWrapper>
              <EditorWrapper>
                <Editor
                  articleText={articleText}
                  flaggedPhrases={flaggedPhrases}
                  selectedPhrase={selectedPhrase}
                  flagToggleState={flagToggleState}
                  setSelectedPhrase={this.setSelectedPhrase}
                  setArticleText={this.setArticleText}
                />
              </EditorWrapper>
              <SidebarWrapper>
                <Sidebar
                  flaggedPhrases={flaggedPhrases}
                  selectedPhrase={selectedPhrase}
                  flagToggleState={flagToggleState}
                  aboutToggleState={aboutToggleState}
                  setFlagToggleState={this.setFlagToggleState}
                  setSelectedPhrase={this.setSelectedPhrase}
                  setAboutToggleState={this.setAboutToggleState}
                />
              </SidebarWrapper>
            </BodyWrapper>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App
