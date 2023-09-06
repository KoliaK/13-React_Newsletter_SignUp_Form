import React, { useState } from 'react';
import Subscribe from './components/Subscribe';
import Success from './components/Success';
import './App.css';

function App() {
  const [successPage, setSuccessPage] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <>
      {
        successPage ? (
          <Success userEmail={userEmail}/>
        ) : (
          <Subscribe 
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          setSuccessPage={setSuccessPage} />
        )
      }      
    </>
  )
}

export default App
