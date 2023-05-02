import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const DetailsData = useLoaderData()
    const { chefId } = useParams()
    const [chefDetails, setChefDetails] = useState({})
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        const chefData = DetailsData.find((item) => item.id === chefId);
        setChefDetails(chefData)
    }, [DetailsData, chefId])
    const recipes = chefDetails.recipes;
    const handleFavoriteClick = () => {
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
        setIsFavorite(true);
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="flex flex-col gap-10 md:flex-row justify-between items-center my-7 p-10 bg-slate-200 rounded-xl">
                <div className='text-center'>
                    <h1 className="text-7xl text-center my-5 font-bold">{chefDetails.name}</h1>
                    <p className='text-red-500 text-3xl my-3 font-semibold'>{chefDetails.bio}</p>
                    <div className='flex gap-5 justify-center my-3  '>
                        <p className='btn btn-outline btn-sm'>Over {chefDetails.likes} likes</p>
                        <p className='btn btn-outline btn-sm'>{chefDetails.experience}</p>
                    </div>
                    <p className='my-3 border-double border-4  border-purple-600 hover:bg-emerald-300  py-3'>Number of Recipes : {chefDetails.numbersOfRecipes}</p>
                </div>
                <img src={chefDetails.picture} className="rounded-lg max-w-lg shadow-2xl" />
            </div>
            <h2 className='text-center my-20 text-5xl font-semibold '>Popular recipes made by {chefDetails.name}</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 my-7'>
                {recipes && recipes.map((recipe) => (
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
                ))}
            </div>


        </div >
    );
};

export default ChefDetails;