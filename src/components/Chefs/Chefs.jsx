import React from 'react';
import { Link } from 'react-router-dom';

const Chefs = ({ data }) => {
    const { name, picture, numbersOfRecipes, experience, likes, id } = data
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 border hover:bg-slate-300 ">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="ChefPIC" className=" w-64 rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-orange-600 font-semibold text-2xl">{name}</h2>
                    <p className=' text-gray-500'>{experience}</p>
                    <p>Over {likes} likes</p>
                    <p>Number of Recipes : {numbersOfRecipes}</p>
                    <div className="card-actions">
                        <Link to={`/chefDetails/${id}`}> <button className="btn btn-block"> View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;