import './label.css'

export function Label({ children, htmlFor }) {
  return (
    <label htmlFor={ htmlFor } className='label-form'>
      { children }
    </label>
  )
}