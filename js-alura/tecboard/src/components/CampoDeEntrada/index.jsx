// jeito inteligente
export function CampoDeEntrada(props) {

  return (
    <input { ...props }/>
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
