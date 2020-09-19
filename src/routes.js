import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home/index";
import Cadastro from "./pages/Cadastro/index";

const Routes = () => {


  return (
    <div>
      
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/cadastro" component={Cadastro}></Route>
          </Switch>
        </BrowserRouter>

    </div>
  );
}

export default Routes;
