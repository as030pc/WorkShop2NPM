import React, {Component} from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Banner from "../componentes/Banner";

import Navbar from "../componentes/Navbar";
import App from "../containers/App"


export default class AppRouters extends Component {
    render() {
        return (
                <BrowserRouter>
                <Navbar/>
                <Banner/>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </BrowserRouter>
            
        )
    }
}