import React from 'react';
import './assets/plugins/bootstrap/css/bootstrap.min.css';
import './assets/plugins/font-awesome/css/font-awesome.css';
import './assets/css/styles.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';


const App = () => {
  return (
      <div>
        <Header />
        <div className="container sections-wrapper">
          <div className="row">
            <Content />
          </div>
        </div>
      </div>
  );
}


export default App;
