import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home/index";
import Cadastro from "./pages/Cadastro/index";

const Routes = () => {


  return (
    <div>
      
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/cadastro" component={Cadastro}></Route>
          </Switch>
        </HashRouter>

    </div>
  );
}

export default Routes;
