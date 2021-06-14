import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './view'

import { log1 } from './tree-demo'

const Index: React.FC = () => {
  useEffect(() => {
    log1()
  }, [])
  return (
    <BrowserRouter>
      {/* <Redirect path="/" to="/product" /> */}
      <Route path="/" component={App} />
    </BrowserRouter>
  )
}

export default Index
