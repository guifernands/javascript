import './formulario-de-evento.css';

import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";


// no react, componentes são FUNÇÕES
export function FormularioDeEvento() {
  
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
