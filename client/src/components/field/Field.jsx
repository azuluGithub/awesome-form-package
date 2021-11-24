/**
 * #FIELD ATTRIBUTES:
 *  => marginTop [number], marginBottom [number]
 */

const Field = (props) => {
  const customField = {
    marginTop: props.marginTop ? props.marginTop : '10px',
    marginBottom: props.marginBottom ? props.marginBottom : '10px',
  }
  return (
    <div style={customField}>
      { props.children }    
    </div>
  )
}

export default Field;