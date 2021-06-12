import React, { useState, useRef, useEffect } from 'react'
import Demo from './component/demo'
import './app.less'

const App: React.FC = () => {
  const [val, setVal] = useState<string>('21212')
  const test = useRef<{ test: () => void }>()
  useEffect(() => {
    if (test.current) {
      test.current.test()
    }
  }, [])

  const getCookie = () => {
    chrome.cookies.get(
      {
        name: 'BDSVRTM',
        url: 'https://www.baidu.com',
      },
      (e) => {
        console.log('%c 🥝 BDSVRTM: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', e)
        setVal(e?.value || '')
      }
    )
  }

  return (
    <div className="App">
      <h1>潇洒1ssadasd4sddasda121</h1>
      <input type="text" value={val} onChange={(v) => setVal(v.target.value)} />
      <button onClick={getCookie}>cookie</button>
      <Demo ref={test} a="223332" />
    </div>
  )
}

export default App
