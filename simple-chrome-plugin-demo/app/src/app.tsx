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

  return (
    <div className="App">
      <h1>潇洒1ssadasd4sddasda12</h1>
      <input type="text" value={val} onChange={(v) => setVal(v.target.value)} />
      <Demo ref={test} a="1" />
    </div>
  )
}

export default App
