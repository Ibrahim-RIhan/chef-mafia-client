import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
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
        setIsFavorite(true);
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center p-10">
                <div className='text-center'>
                    <h1 className="text-5xl text-center my-5 font-bold">{chefDetails.name}</h1>
                    <p className='text-gray-500 '>{chefDetails.bio}</p>
                    <p>Over {chefDetails.likes} likes</p>
                    <p>Number of Recipes : {chefDetails.numbersOfRecipes}</p>
                    <p>{chefDetails.experience}</p>
                    <button > Add to favorites</button>
                </div>
                <img src={chefDetails.picture} className="rounded-lg max-w-xl shadow-2xl" />
            </div>
            <h2 className='text-center my-7 text-5xl font-semibold'>Popular recipes made by {chefDetails.name}</h2>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                {recipes && recipes.map((recipe) => (
                    <div key={recipe.number} class="card w-96 bg-base-100 shadow-xl">
                          <figure><img src={recipe.recipeImage} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{recipe.recipeName}</h2>
                            <p>Ingredients : {recipe.ingredients}</p>
                            <p>Cooking Method: {recipe.cookingMethod}</p>
                            <p>Rating : {recipe.rating} out of 5</p>
                            <button  onClick={handleFavoriteClick} disabled={isFavorite} className='p-2 btn btn-link'>Add to Favorite</button>
                        </div>
                      
                    </div>
                ))}
            </div>


        </div >
    );
};

export default ChefDetails;