//local imports
import './Button.css';

/**
 * #BUTTON ATTRIBUTES:
 *  => backgroundColor [string], color [string], borderColor [string]
 *  => fontSize [number], fontWeight [number], border [number], borderRadius [number]
 */
const Button = (props) => {
  const customBtn = {
    borderRadius: props.borderRadius ? `${props.borderRadius}px` : '2px',
    fontSize: props.fontSize ? `${props.fontSize}px` : '14px',
    color: props.color ? props.color : 'dimgray',
    backgroundColor: props.backgroundColor ? props.backgroundColor : 'lightGrey',
    fontWeight: props.fontWeight ? props.fontWeight : 600,
    border: props.border ? `${props.border}px solid ${props.borderColor}` : 'none'
  }

  return (
    <button
      className='button'
      style={customBtn}
      type='submit'
    > { props.children } </button>
  )
}

export default Button;