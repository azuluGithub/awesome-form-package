//local imports
import './Input.css';

/**
 * #INPUT ATTRIBUTES:
 *  => backgroundColor [string], color [string], borderColor [string]
 *  => fontSize [number], fontWeight [number], border [number], borderRadius [number]
 */
const Input = (props) => {
  const customInput = {
    borderRadius: props.borderRadius ? `${props.borderRadius}px` : '2px',
    fontSize: props.fontSize ? `${props.fontSize}px` : '13px',
    color: props.color ? props.color : 'black',
    backgroundColor: props.backgroundColor ? props.backgroundColor : 'white',
    fontWeight: props.fontWeight ? props.fontWeight : 400,
    border: props.border ? `${props.border}px solid ${props.borderColor}` : `1px solid #ddd`
  }

  return (
    <input
      className='input'
      style={customInput}
      name={props.name}
      value={props.value}
      type={props.type ? props.type : 'text'}
      placeholder={props.placeholder ? props.placeholder : ''}
      onChange={() => {}}
    >
      { props.children }     
    </input>
  )
}

export default Input;