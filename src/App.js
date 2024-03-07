import React, { useState } from 'react';
import myContext from './store/storeContext';
import Home from './Components/Home';

function App() {
  const [data, setData] = useState('');
  function handleClick(){
    localStorage.setItem('username', 'sharad')
    localStorage.setItem('password', '0203')
  }
  
  function fetchData(){
    setData(localStorage.getItem('username'));
  }
  function deleteData(){
    localStorage.clear();
  }
  function deletePassword(){
    localStorage.removeItem('password');
  }
  return (
    <>
    <div>
   <myContext.Provider value={{title : `this is ${data}`}}>
    <Home/>
   </myContext.Provider>
   <button onClick={handleClick}>Save data</button>
   <button onClick={fetchData}>Welcome darling</button>
   <button onClick={deleteData}>Delete All</button>
   <button onClick={deletePassword}>Delete password</button>
    </div>
    </>
  );
}

export default App;
