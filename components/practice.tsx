import React, { useState, useRef, useEffect } from 'react'
import { NextPage } from 'next'
/**
 * 型引数
 */
interface AppProps {
  name: string
}

const Practice: NextPage<AppProps> = ({ name }) => {
  const [count, setCount] = useState<number>(0)

  const addResult = () => {
    setCount(() => count + 1)
  }
  const subtractResult = () => {
    setCount(() => count - 1)
  }
  const renderResult = useRef<number>(0)
  useEffect(() => {
    renderResult.current = renderResult.current + 1
  })

  const inputRef = useRef<HTMLInputElement>(null!)
  const focusResult = () => {
    inputRef.current.focus()
  }
  return (
    <div>
      <h1>{name}</h1>
      <p>{count}</p>
      <button onClick={addResult}>+ボタン</button>
      <button onClick={subtractResult}>-ボタン</button>
      <div>This components {renderResult.current}</div>
      <input type="text" ref={inputRef} />
      <button onClick={focusResult}>Click ref</button>
    </div>
  )
}

export default Practice
