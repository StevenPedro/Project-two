import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/home/home";
import Menu from "./component/menu/menu";
import Extra from "./component/extra/extra";
import Hobby from "./component/hobby/hobby";
import Skills from "./component/skills/skills";
import Cadastro from "./component/cadastro/cadastro";
import Footer from "./component/footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Footer />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/extra" component={Extra} />
          <Route path="/hobby" component={Hobby} />
          <Route path="/skills" component={Skills} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
