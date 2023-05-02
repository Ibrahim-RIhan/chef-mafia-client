import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const DetailsData = useLoaderData()
    console.log(DetailsData);
    const { chefId } = useParams()
    console.log(chefId);
    const [chefDetails, setChefDetails] = useState({})
    useEffect(() => {
        const chefData = DetailsData.find((item) => item.id === chefId);
        setChefDetails(chefData)
    }, [DetailsData, chefId])
    console.log(chefDetails);
    return (
        <div>

        </div>
    );
};

export default ChefDetails;