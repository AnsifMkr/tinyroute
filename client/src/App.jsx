import { useState } from 'react'
import './App.css'
import UrlForm from './components/UrlForm'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>🔗 TinyRoute</h1>
        <p>Shorten your long links instantly!</p>
      </header>
      <main>
        <UrlForm />
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default App
