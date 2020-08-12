import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Category from '../Category/Category';
import FoodItemContainer from '../FoodItemContainer/FoodItemContainer';
import FoodItemDtl from '../FoodItemDtl/FoodItemDtl';


const Home = () => {
    return (
        <div>
            <Router>
                <Category></Category>
                <Switch>
                    <Route exact path='/breakfast'>
                        <FoodItemContainer CategoryName="breakfast" ></FoodItemContainer>
                    </Route>

                    <Route exact path='/dinner'>
                        <FoodItemContainer CategoryName="dinner"></FoodItemContainer>
                    </Route>
                    <Route exact path='/'>
                        <FoodItemContainer CategoryName="lunch"></FoodItemContainer>
                    </Route>

                    <Route path="/category/:id">
                        <FoodItemDtl></FoodItemDtl>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;