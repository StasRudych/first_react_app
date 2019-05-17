import React from 'react';
import './App.css';
import MyTestComponent from './TestExport';



const App = () => {
  return (
      <div className="App">
        Hello world;<br/>
        <Header />
        <MyTestComponent />
      </div>
  );
}


const Header = () => {
  return(
    <div className="my_test_class">
      Hello. i'm from another component;
    </div>
  );
}

export default App;
