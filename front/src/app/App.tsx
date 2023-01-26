import { useState } from 'react'

import styles from '@/app/App.module.css'
import reactLogo from '@/assets/react.svg'
function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className={styles.navContainer}>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className={styles.logo} src="/vite.svg" />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img alt="React logo" className={`${styles.logo} ${styles.react}`} src={reactLogo} />
        </a>
      </nav>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button type='submit' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={`${styles.readTheDocs} bg-pink-400`}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App