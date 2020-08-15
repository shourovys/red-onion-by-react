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
import { PrivateRoute } from '../Login/Auth';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Login from '../Login/Login';
import OrderComplete from '../OrderComplete/OrderComplete';


const Home = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/login'>
                        <Login></Login>
                    </Route>
                    <Route exact path='/breakfast'>
                        <Category></Category>
                        <FoodItemContainer CategoryName="breakfast" ></FoodItemContainer>
                    </Route>

                    <Route exact path='/dinner'>
                        <Category></Category>
                        <FoodItemContainer CategoryName="dinner"></FoodItemContainer>
                    </Route>
                    <Route exact path='/'>
                        <Category></Category>
                        <FoodItemContainer CategoryName="lunch"></FoodItemContainer>
                    </Route>

                    <PrivateRoute exact path='/placeOrder'>
                        <PlaceOrder></PlaceOrder>
                    </PrivateRoute>

                    <PrivateRoute exact path='/orderComplete'>
                        <OrderComplete></OrderComplete>
                    </PrivateRoute>

                    <Route path="/category/:id">
                        <FoodItemDtl></FoodItemDtl>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;