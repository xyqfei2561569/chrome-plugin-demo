import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './view'

const Index: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Redirect path="/" to="/product" /> */}
      <Route path="/" component={App} />
    </BrowserRouter>
  )
}

export default Index
