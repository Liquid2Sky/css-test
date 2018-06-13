import React, { Component } from 'react'
import Header from './components/Header'
import CardEx from './components/Card'
import TestComponent from './components/TestComponent/Test'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <CardEx />
        <TestComponent />
      </div>
    )
  }
}

export default App
