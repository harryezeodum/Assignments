import React from 'react';
import { FormContextProvider } from './FormContextProvider';
import Form from './Form';


function App() {
  
  return (
    <>
      <FormContextProvider>
        <Form />
      </FormContextProvider>
    </>
  )
}

export default App
