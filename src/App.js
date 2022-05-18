import { useState } from 'react';
import Form from './components/Form'
import FormItem from './components/FormItem';

const arr =[
  {
    name: 'sadyr',
    age:22
  },
  
]

function App() {

  const [state, setState] = useState(arr)

  function saveObject(obj){
    console.log(obj);
     setState((prev)=> [...prev, obj])
  }


  return (
    <div>
      {console.log(state)}
   <Form onSaveObject={saveObject}/>
   {state.map((el)=>(
     <FormItem key={el.id} name={el.enteredUsername} email={el.enteredEmail} pass={el.enteredPassword} />
   ))}
   
    </div>
  );
}

export default App;
