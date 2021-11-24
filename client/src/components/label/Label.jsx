/**
 * #INPUT ATTRIBUTES:
 *  => color [string], borderColor [string]
 *  => fontSize [number], fontWeight [number]
 */
const Label = (props) => {
  const customLabel = {
    fontSize: props.fontSize ? `${props.fontSize}px` : '15px',
    color: props.color ? props.color : 'dimgray',
    fontWeight: props.fontWeight ? props.fontWeight : 600
  }

  return (
    <label
      className='label'
      style={customLabel}
    >
      { props.children }     
    </label>
  )
}

export default Label;