import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Token from './components/Token';
import { useState } from 'react';
import AddToken from './components/AddToken';
import generateRandomNumber from './utils';

function App() {
  const [isAdd,setIsAdd] = useState(false);
  const [allTokens,setAllTokens] = useState([]);


  const addToken = (token) =>{
    const num = generateRandomNumber();
    setAllTokens([...allTokens,{...token,num}]);
    setIsAdd(false);
  }
  
  console.log({allTokens});
  return (
    <div className="App">
      <Header setIsBack={setIsAdd} isAdd={isAdd} />

      {
        isAdd ?
        <AddToken addToken={addToken}  />
     : <div>
      {allTokens.map(token=>
        
        <Token data={token} />
        )}
      </div>
      }
    </div>
  );
}

export default App;
