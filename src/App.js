import { useState } from 'react';
import Form from './components/Form'
import FormItem from './components/FormItem';


function App() {

  const [state, setState] = useState(arr)

  function saveObject(obj){
     setState((prev)=> [...prev, obj])
  }


  return (
    <>
   <Form onSaveObject={saveObject}/>
   {state.map((el)=>(
     <FormItem
      key={el.id}
      name={el.enteredUsername}
      email={el.enteredEmail}
      pass={el.enteredPassword} />
   ))}
   
    </>
  );
}

export default App;
