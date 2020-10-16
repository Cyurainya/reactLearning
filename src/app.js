
import React from 'react';
import Home from '../src/views/home'
import { Route} from "react-router-dom";


function App() {
  return (
   <>
      <div className="App">
        <Route path="/" component={Home}></Route>
     
    </div>
   </>
  
  );
}

export default App;
