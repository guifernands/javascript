import './campo-de-entrada.css'

// jeito inteligente
export function CampoDeEntrada(props) {

  return (
    <input { ...props } className='campo-entrada-form' />
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
