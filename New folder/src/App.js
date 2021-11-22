import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from './Login';

import Dashboard from './Dashboard';

import Playlist from './Playlist';


function App() 
{
  return (
    
<div className="App" align="center">

      <BrowserRouter>
 
       <div>
        
 
          <div className="content" >

            <Switch>

            
              <Route exact path="/" component={Login} />

              <Route path="/dashboard" component={Dashboard} />
 
             <Route path="/playlist" component={Playlist} />
 
           </Switch>

          </div>

        </div>

      </BrowserRouter>

    </div>
 
 );

}

export default App;