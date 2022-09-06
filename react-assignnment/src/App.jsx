import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Post } from './components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <Post/>
    </div>
  )
}

export default App
