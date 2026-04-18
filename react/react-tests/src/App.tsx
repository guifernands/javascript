import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'
import { AppRoutes } from './routes'
function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
