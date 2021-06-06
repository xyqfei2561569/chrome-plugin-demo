import React, { forwardRef, Ref, useImperativeHandle } from 'react'

interface Iprops {
  a: string
}

const Index = forwardRef((props: Iprops, ref: Ref<any>) => {
  console.log('%c 🍓 props: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', props)
  useImperativeHandle(ref, () => ({
    test() {
      console.log('%c 🍹 : ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', 'log')
    },
  }))
  return (
    <div className="App">
      <h1>潇洒1ssadasd4sddasda12</h1>
    </div>
  )
})

export default Index
