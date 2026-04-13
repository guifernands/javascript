import './campo-selecione.css'

export function CampoSelecione({ name, id, op1, op2, op3, op4, op5}) {
    return (
        <select className='campo-selecione' name= { name } id= { id }>
            <option value="" disabled>Clique e escolha...</option>
            <option value={ op1 }>{ op1 }</option>
            <option value={ op2 }>{ op2 }</option>
            <option value={ op3 }>{ op3 }</option>
            <option value={ op4 }>{ op4 }</option>
            <option value={ op5 }>{ op5 }</option>
        </select>
    )
}