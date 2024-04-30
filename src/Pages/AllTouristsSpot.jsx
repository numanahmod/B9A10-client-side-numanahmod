import { useLoaderData } from "react-router-dom";
import AllSpotCards from "../Components/AllSpotCards";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";


const AllTouristsSpot = () => {

    const Spots = useLoaderData();
    const {cost } = Spots;
    const averageCost = parseInt(cost);
    const [sort, setSort] = useState("ascending");

    const parseCost = (averageCost) => {
        if (averageCost === "Free" || averageCost === "free" || averageCost === "FREE") {
            return 0;
            
        }
        else {
            return parseFloat(averageCost.replace(/[^0-9.-]+/g, ""))
        }
    }
    const handleSort = () => {
        if (sort  === "ascending") {
            Spots.sort(
                (a, b ) => parseCost(a.cost) - parseCost(b.cost)
            )
            setSort("descending")
            
        } else {
            Spots.sort(
                (a, b ) => parseCost(b.cost) - parseCost(a.cost)
            )
            setSort("ascending")
        }

    };

    return (
        <div>
            <div className="flex justify-center mb-20">
                <div className="dropdown">
                    <div 
                    tabIndex={0}
                    role="button"
                    className="btn m-1 mt-6 flex items-center gap-3 bg-white text-black"
                    >
                        Sort by <FaAngleDown/>

                    </div>
                    <ul
                    tabIndex={0}
                    className="dropdown-content font-bold bg-sky-700 menu p-2  rounded-md w-40 text-white"
                    >
                        <li onClick={() => handleSort({averageCost})}>
                         <a>Average Cost </a>
                        </li>
                        
                    </ul>

                </div>

            </div>
            
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