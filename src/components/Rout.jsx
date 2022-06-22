import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import {Results} from './Results';
export const Rout = () => {
    return (
        <div>
         <Switch>
                <Route exact path="/">
                 <Redirect to="/search" />
                </Route>
                <Route exact path={['/search','/news','/images','/videos']}>
                    <Results/> 
                </Route>
            </Switch>   
        </div>
    )
}
