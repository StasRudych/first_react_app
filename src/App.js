import React from 'react';
import './assets/plugins/bootstrap/css/bootstrap.min.css';
import './assets/plugins/font-awesome/css/font-awesome.css';
import './assets/css/styles.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Sidebar from './Components/Sidebar/Sidebar';
import Page from './Components/Page/Page';
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="container sections-wrapper">
                    <div className="row">
                        <Route path='/page' component={Page}/>
                        <Route path='/main' component={Content}/>
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
