import React, { Component } from 'react'
import HomeNav from './HomeNav/HomeNav'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeSearch from './HomeSearch/HomeSearch'
import HomeListEvents from './HomeListEvents/HomeListEvents'
import Page from '../../components/Page/Page'
import Container from '../../components/Container/Container'

export class HomePage extends Component {
  render () {
    return (
      <Page title='Home'>
        <HomeNav />
        <Container>
          <HomeHeader />
          <HomeSearch />
          <HomeListEvents />
        </Container>
      </Page>
    )
  }
}

export default HomePage
