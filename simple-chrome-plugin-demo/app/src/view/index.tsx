import React, { useState, useRef, useEffect } from 'react'
import Demo from '../component/demo'
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
    console.log('%c 🥩 tab: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', tab)
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
        <input type="text" value={cookieId} onChange={(v) => setCookieId(v.target.value)} />
      </div>
      <div>
        <input type="text" value={val} onChange={(v) => setVal(v.target.value)} />
      </div>
      <button onClick={getCookie}>getCookie</button>
      <Demo ref={test} a="223332" />
    </div>
  )
}

export default App
