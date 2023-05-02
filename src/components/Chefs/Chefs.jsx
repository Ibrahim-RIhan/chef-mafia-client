import React from 'react';
import { Link } from 'react-router-dom';

const Chefs = ({ data }) => {
    const {name,picture,numbersOfRecipes,experience,likes, id } = data
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="ChefPIC" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{experience}</p>
                    <p>{likes}</p>
                    <p>{numbersOfRecipes}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={`/chefDetails/${id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Chefs;