import './formulario-de-evento.css';

import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { CampoSelecione } from '../CampoSelecione';
import { Botao } from '../Botao';


// no react, componentes são FUNÇÕES
export function FormularioDeEvento() {
  
  return (
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>

          <CampoDeEntrada
            type="text"
            name="nomeEvento"
            id='nomeEvento'
            placeholder='Summer dev hits'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>

          <CampoDeEntrada
            type="date"
            name="dataEvento"
            id='dataEvento'
          />
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="temaEvento">
            Tema do evento
          </Label>

          <CampoSelecione name="temaEvento" id='temaEvento' op1="Casamento" op2="Festa de Formatura" op3="Show" op4="15 anos" op5="Aniversário"/>
            
        </CampoDeFormulario>

        <div className='acoes'>
          <Botao>
              Criar Evento
          </Botao>
        </div>

      </div>
    </form>
  )
}
