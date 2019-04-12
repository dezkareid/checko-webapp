import React, { Component } from 'react'
import PageLayout from './PageLayout'
class Page extends Component {
  setTitle (title) {
    document.title = title
  }

  componentDidUpdate (prevProps) {
    if (this.props.title !== prevProps.title) {
      this.setTitle(this.props.title)
    }
  }

  render () {
    return (
      <PageLayout>
        {this.props.children}
      </PageLayout>
    )
  }
}
export default Page
