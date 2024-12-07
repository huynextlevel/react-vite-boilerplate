import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setCounter } from '@/store/actions/app'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import '@/App.css'

function Home() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  const handleSetCounter = () => {
    setCount((count) => count + 1)
    dispatch(setCounter(count))
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleSetCounter}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home
