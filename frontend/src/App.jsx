import Calculator from './components/Calculator'
import './App.css'
import { APP_TITLE, APP_SUBTITLE, APP_FOOTER } from './utils/constants'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>{APP_TITLE}</h1>
        <p>{APP_SUBTITLE}</p>
      </header>
      <main>
        <Calculator />
      </main>
      <footer className="app-footer">
        <p>{APP_FOOTER}</p>
      </footer>
    </div>
  )
}

export default App
