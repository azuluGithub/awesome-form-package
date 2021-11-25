//local import
import './Form.css';

const Form = (props) => {

    const customForm = {
        borderRadius: props.borderRadius ? `${props.borderRadius}px` : 'none',
        backgroundColor: props.backgroundColor ? props.backgroundColor : 'white',
        border: props.border ? `${props.border}px solid ${props.borderColor}` : 'none',
        boxShadow: '0px 0px 10px #ddd'
    }
    return (
        <form
            className='form'
            style={customForm}
        >
            { props.children }   
        </form>
    )
}

export default Form;
