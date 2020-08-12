import React from "react";
import { Link } from "react-router-dom";
import './Category.css'

const Category = () => {
    return (
        <div>
            <ul className='category-container'>
                <li className='category-item'>
                    <Link className="listStyle" to="/breakfast">Breakfast</Link>
                </li>

                <li className='category-item'>
                    <Link className="listStyle" to="/">Lunch</Link>
                </li>

                <li className='category-item'>
                    <Link className="listStyle" to="/dinner">Dinner</Link>
                </li>

            </ul>
        </div>
    );
};

export default Category;