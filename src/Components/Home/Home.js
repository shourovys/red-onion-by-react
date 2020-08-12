import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Category from '../Category/Category';
import FoodItemContainer from '../FoodItemContainer/FoodItemContainer';

const Home = () => {
    return (
        <div>
            <Router>
                <Category></Category>
                <Switch>
                    <Route path='/breakfast'>
                        <FoodItemContainer CategoryName="breakfast" ></FoodItemContainer>
                    </Route>
                    <Route path='/'>
                        {/* <FoodItemContainer CategoryName="lunch"></FoodItemContainer> */}
                    </Route>
                    <Route path='/dinner'>
                        {/* <FoodItemContainer CategoryName="dinner"></FoodItemContainer> */}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;