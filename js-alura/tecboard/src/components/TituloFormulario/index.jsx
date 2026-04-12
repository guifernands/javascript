 // props é um OBJETO
// props.ALGUMACOISA
export function TituloFormulario(props) {
  return (
      <h2>
        { props.children }
      </h2>
  )
}