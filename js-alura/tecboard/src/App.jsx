import './App.css'

// no react, componentes são FUNÇÕES

// props é um OBJETO
// props.ALGUMACOISA
function TituloFormulario(props) {
  return (
      <h2>
        { props.children }
      </h2>
  )
}

// { desestruturação } (melhor método)
function CampoDeFormulario({ children }) {
  return (
    <fieldset>
      { children }
    </fieldset>
  )
}

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={ htmlFor }>
      { children }
    </label>
  )
}

// jeito burro
/* function CampoDeEntrada({ type, name, id, placeholder}) {

  return (
    <input
      type= { type }
      name= { name }
      id= { id }
      placeholder= { placeholder }
    />
  )
} */

// jeito inteligente
function CampoDeEntrada(props) {

  return (
    <input { ...props }/>
  )
}

function FormularioDeEvento() {
  
  return (
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <CampoDeFormulario>
        <Label>
          Qual o nome do evento?
        </Label>

        <CampoDeEntrada
          type="text"
          name="nomeEvento"
          id='nome'
          placeholder='Summer dev hits'
        />
      </CampoDeFormulario>
    </form>
  )
}

function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Imagem Cabeçalho" />
      </header>

      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
