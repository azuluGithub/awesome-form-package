//local imports
import './Input.css';
import { Msg } from './Msg';

/***
 * #NB: TO UPDATE THE VALIDATION APPROACH LATER
 */
const Input = props => {
  
  /**
   * #LIST OF ALL VALIDATION CONDITIONS
  */
  const conditions = [
    {
        name: 'password',
        msg: 'must be atleast 5 characters long',
        condition: input => input.length >= 5
    },
    {
        name: 'password',
        msg: 'must contain atleast ONE UPPERCASE letter',
        condition: input => /[A-Z]/g.test(input)
    },
    {
        name: 'password',
        msg: 'must contain atleast ONE LOWERCASE letter',
        condition: input => /[a-z]/g.test(input)
    },
    {
        name: 'password',
        msg: 'must contain atleast ONE NUMBER',
        condition: input => /\d/g.test(input)
    },
    {
        name: 'username',
        msg: 'must be atleast 4 characters long',
        condition: input => input.length >= 4
    }
  ] 

  /**
   * #CONDITIONS SEPARATED TO: USERNAME AND PASSWORD GROUPS
  */
  const validationClass = { password: [], username: [] }

  props.value && conditions.forEach((c) => {
    validationClass[c.name].push(<Msg value={props.value} c={c} />);
  })

  /**
   * #CUSTOM STYLES FROM PROPS
   */
  const customInput = {
    borderRadius: props.borderRadius ? `${props.borderRadius}px` : '2px',
    fontSize: props.fontSize ? `${props.fontSize}px` : '13px',
    color: props.color ? props.color : 'black',
    backgroundColor: props.backgroundColor ? props.backgroundColor : 'white',
    fontWeight: props.fontWeight ? props.fontWeight : 400,
    border: props.border ? `${props.border}px solid ${props.borderColor}` : `1px solid #ddd`
  }

  return (
    <>
      { props.name === 'username' ? validationClass.username :  validationClass.password }
      <input
        className='input'
        style={customInput}
        name={props.name}
        value={props.value}
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
        onChange={props.onChange}
      >
        { props.children }     
      </input>
    </>
  )
}

export default Input;