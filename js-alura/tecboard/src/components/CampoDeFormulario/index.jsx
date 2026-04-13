import './campo-de-formulario.css'
// { desestruturação } (melhor método)
export function CampoDeFormulario({ children }) {
  return (
    <fieldset className='campo-form'>
      { children }
    </fieldset>
  )
}