import { useLoaderData } from "react-router-dom";
import AllSpotCards from "../Components/AllSpotCards";


const AllTouristsSpot = () => {

    const Spots = useLoaderData();
    return (
        <div>
            
            <div className='grid md:grid-cols-2 gap-8 m-12'>
                {
                  Spots.map( spot => <AllSpotCards key={spot._it} spot ={spot}>

                  </AllSpotCards>)
                }
                </div>
        </div>
    );
};

export default AllTouristsSpot;