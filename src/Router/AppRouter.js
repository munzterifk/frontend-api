import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Components
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import About from '../components/About';
import Recipelist from '../components/Recipelist';



const Approuter = () => {
    return (
        <Fragment>
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={Dashboard} exact={true}/>
                        <Route path="/about" component={About} />
                        <Route path="/recipe" component={Recipelist} />
                        <Route component={ ()=> <div>NotFoundPage</div> }/>
                    </Switch>
                </div>
            </Router>
        </Fragment>
    );
}

export default Approuter;

