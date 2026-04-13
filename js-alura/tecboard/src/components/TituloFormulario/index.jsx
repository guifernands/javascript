import './titulo-formulario.css'

// props é um OBJETO
// props.ALGUMACOISA
export function TituloFormulario({ children }) {
  return (
      <h2 className='titulo-form'>
        { children }
      </h2>
  )
}