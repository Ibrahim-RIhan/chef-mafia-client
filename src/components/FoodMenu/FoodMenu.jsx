import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodMenu = ({recipe}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.error('Your Recipe is bookmarked as Favorites', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
       
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div key={recipe.number} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className=''><img src={recipe.recipeImage} alt="" /></figure>
                <div className="card-body">
                    <h2 className=" text-center text-2xl font-semibold">{recipe.recipeName}</h2>
                    <p className='text-orange-400'>Ingredients : {recipe.ingredients}</p>
                    <div className='text-lg text-center'>
                        <p>Cooking Method: {recipe.cookingMethod}</p>
                        <p>Rating : {recipe.rating} out of 5</p>
                    </div>
                    <button onClick={handleFavoriteClick} disabled={isFavorite} className='p-2  gap-2 btn btn-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Add to favorites
                    </button>
                </div>

            </div>
        </div>
    );
};

export default FoodMenu;