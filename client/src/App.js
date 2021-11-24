//local imports
import './App.css';
import Button from './components/button/Button';
import Form from './components/form/Form';
import Input from './components/input/Input';
import Label from './components/label/Label';
import Field from './components/field/Field';

const App = () => {

  return (
    <div className="app">
      <Form>
        <Field>
          <Label color='magenta'>First Name</Label>
          <Input />
        </Field>
        <Field>
          <Label color='palevioletred'>Email Address</Label>
          <Input />
        </Field>
        <Field>
          <Label color='cadetBlue'>Password</Label>
          <Input/>
        </Field>
        <Field>
          <Label color='crimson'>Confirm Password</Label>
          <Input placeholder='Confirm your password'/>
        </Field>
        <Button color='white' backgroundColor='black'>Submit</Button>
      </Form>
    </div>
  )
}

export default App;
