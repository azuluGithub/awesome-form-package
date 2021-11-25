//local imports
import './App.css';
import Button from './library/button/Button';
import Form from './library/form/Form';
import Input from './library/input/Input';
import Label from './library/label/Label';
import Field from './library/field/Field';
import { useState } from 'react';


/**
 * # THIS PAGE IS NOT PART OF THE LIBRAY: IT JUST SHOWS HOW THE CLIENT WOULD USE THE LIBRARY
 * # ONLY USERNAME AND PASSWORD ARE VALIDATED
 * # YOU CAN RE-USE AS MANY COMPONENTS AS YOU PLEASE
 * # MODIFIABLE PROPS:
 *    # FORM: backgroundColor [string], borderColor [string], border [number], borderRadius [number]
 *    # FIELD: marginTop [number], marginBottom [number]
 *    # LABEL: color [string], borderColor [string], fontSize [number], fontWeight [number]
 *    # INPUT: backgroundColor [string], color [string], borderColor [string], fontSize [number], fontWeight [number], border [number], borderRadius [number]
 */
const App = () => {
 
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div className="app">
      <Form>
        <Field>
          <Label color='magenta'>User Name</Label>
          <Input name='username' value={username} placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)}/>
        </Field>
        <Field>
          <Label color='cadetBlue'>Password</Label>
          <Input name='password' value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}/>
        </Field>
        <Button color='white'>Submit</Button>
      </Form>
    </div>
  )
}

export default App;
