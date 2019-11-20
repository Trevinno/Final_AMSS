import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Portfolio from "./components/portfolio";
import NavBar from "./components/navbar";
import Homepage from "./components/homepage";
import Gallery from "./components/gallery"
import Sign_up from "./components/signup"
import Sign_in from "./components/signin"
import Cat_1 from "./components/cat1"
import Cat_2 from "./components/cat2"
import Cat_3 from "./components/cat3"
import Cat_4 from "./components/cat4"
import Cat_5 from "./components/cat5"
import Cat_6 from "./components/cat6"
import Cat_7 from "./components/cat7"
import Shopping from "./components/shopping"
import Feed from "./components/feed"
import Jaime from "./components/jaime"

export default class App extends Component {
  render(){
  return (
    <React.Fragment>
        <NavBar />
        <main role="main"style={{
          // backgroundColor: '#66DAC7'
      }}>
        {/* Aqui se declaran todas las rutas que se van a usar en la aplicacion */}
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/homepage" component={Homepage} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/feed" component={Feed} />
            <Route path="/signup" component={Sign_up} />
            <Route path="/signin" component={Sign_in} />
            <Route path="/cat1" component={Cat_1} />
            <Route path="/cat2" component={Cat_2} />
            <Route path="/cat3" component={Cat_3} />
            <Route path="/cat4" component={Cat_4} />
            <Route path="/cat5" component={Cat_5} />
            <Route path="/cat6" component={Cat_6} />
            <Route path="/cat7" component={Cat_7} />
            <Route path="/jaime" component={Jaime} />
            <Route path="/shopping" component={Shopping} />

            <Redirect from="/" to="/homepage" />
          </Switch>
        </main>
      </React.Fragment>
  );
}
}

