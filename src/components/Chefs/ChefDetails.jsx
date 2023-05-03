import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from 'react-router-dom';
import FoodMenu from '../FoodMenu/FoodMenu';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const DetailsData = useLoaderData()
    const { chefId } = useParams()
    const [chefDetails, setChefDetails] = useState({})
    useEffect(() => {
        const chefData = DetailsData.find((item) => item.id === chefId);
        setChefDetails(chefData)
    }, [DetailsData, chefId])
    const recipes = chefDetails.recipes;


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
                <LazyLoad >
                <img src={chefDetails.picture} className="rounded-lg max-w-lg shadow-2xl" />
                </LazyLoad>
              
            </div>
            <h2 className='text-center my-20 text-5xl font-semibold '>Popular recipes made by {chefDetails.name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 my-7'>
                {recipes && recipes.map((recipe) => (
                    <FoodMenu key={recipe.number} recipe={recipe}></FoodMenu>
                ))}
            </div>
        </div >
    );
};

export default ChefDetails;