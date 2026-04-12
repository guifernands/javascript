import './App.css'

// pega  de forma automática o index.jsx
import { FormularioDeEvento } from './components/FormularioDeEvento'




function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Imagem Cabeçalho" />
      </header>

      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento  />
    </main>
  )
}

export default App
