import React, { useState } from 'react'
import './app.less'

const App: React.FC = () => {
  const [val, setVal] = useState<string>('21212')
  return (
    <div className="App">
      <h1>潇洒1ssadasdadasddasda12</h1>
      <input type="text" value={val} onChange={(v) => setVal(v.target.value)} />
    </div>
  )
}

export default App
