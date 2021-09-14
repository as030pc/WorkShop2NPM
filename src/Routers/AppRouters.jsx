import React, {Component} from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Banner from "../componentes/Banner";

import Navbar from "../componentes/Navbar";
import App from "../containers/App"
import Carrito from "../componentes/Carrito";
import { Crud } from "../componentes/Crud";

export default class AppRouters extends Component {
    render() {
        return (
                <BrowserRouter>
                
                <Navbar/>
                <Banner/>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/carrito" component={Carrito} />
                    <Route exact path="/crud" component={Crud} />
                </Switch>
            </BrowserRouter>
            
        )
    }
}