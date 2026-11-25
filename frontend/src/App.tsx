import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('checking...')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('backend not reachable'))
  }, [])

  return (
    <main>
      <h1>Utang Paham</h1>
      <p>Backend status: {status}</p>
    </main>
  )
}

export default App