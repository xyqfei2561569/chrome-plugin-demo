import React, { useState, useRef, useEffect } from 'react'
import Demo from '../component/demo'
import { Input } from 'antd'
import { Button } from 'antd~v4.6.2'
import './app.less'

const App: React.FC = () => {
  const [val, setVal] = useState<string>('21212')
  const [cookieId, setCookieId] = useState<string>('')
  const test = useRef<{ test: () => void }>()
  useEffect(() => {
    if (test.current) {
      test.current.test()
    }
  }, [])

  const getCookie = async () => {
    let queryOptions = { active: true, currentWindow: true }
    const [tab] = await chrome.tabs.query(queryOptions)
    chrome.cookies.get(
      {
        name: cookieId,
        url: tab.url || '',
      },
      (e) => {
        setVal(e?.value || '')
      }
    )
  }
  return (
    <div className="App">
      <h1>潇洒1ssadasd4sddasda121</h1>
      <div>
        cookieId
        <Input type="text" value={cookieId} onChange={(v) => setCookieId(v.target.value)} />
      </div>
      <div>
        <Input type="text" value={val} onChange={(v) => setVal(v.target.value)} />
      </div>
      <Button type="primary" onClick={getCookie}>
        getCookie
      </Button>
      <Demo ref={test} a="223332" />
    </div>
  )
}

export default App
