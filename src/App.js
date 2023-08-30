import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Token from './components/Token';
import { useEffect, useState } from 'react';
import AddToken from './components/AddToken';
import generateRandomNumber from './utils';

function App() {
  const [isAdd,setIsAdd] = useState(false);
  const [allTokens,setAllTokens] = useState([]);
  const [intervalId, setIntervalId] = useState(null);


  const addToken = (token) =>{
    const num = generateRandomNumber();
    setAllTokens([...allTokens,{...token,num}]);
    setIsAdd(false);
  }
  
  function updateTokens(array) {
   const iId = setInterval(() => {
     if(allTokens.length){ 
      allTokens.forEach(obj => {
        obj.num = generateRandomNumber(); // Replace this with your token generation logic
      });
     setAllTokens([...array])
    }
    setIntervalId(iId);
    }, 60000); // 600000 milliseconds = 60 seconds
  }

  useEffect(()=>{
    if(allTokens.length){
      if (intervalId) {
        clearInterval(intervalId);
      }
     updateTokens(allTokens);
    }
  },[allTokens.length])

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
