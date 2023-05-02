import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const DetailsData = useLoaderData()
    const { chefId } = useParams()
    const [chefDetails, setChefDetails] = useState({})
    useEffect(() => {
        const chefData = DetailsData.find((item) => item.id === chefId);
        setChefDetails(chefData)
    }, [DetailsData, chefId])
    console.log(chefDetails);
    return (
        <div>

            <div className="flex flex-col md:flex-row justify-between items-center p-10">
                <div>
                    <h1 className="text-5xl font-bold">{chefDetails.name}</h1>
                    <p>{chefDetails.bio}</p>
                    <p>Over {chefDetails.likes} likes</p>
                    <p>Number of Recipes : {chefDetails.numbersOfRecipes}</p>
                    <p>{chefDetails.experience}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <img src={chefDetails.picture} className="rounded-lg max-w-xl shadow-2xl" />
            </div>
        </div >
    );
};

export default ChefDetails;