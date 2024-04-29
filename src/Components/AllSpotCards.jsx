import { Link } from "react-router-dom";


const AllSpotCards = ({spot}) => {
    

    const {image,touristSpotName, countryName, location, description,cost, seasonality, time, visitors, email, username, _id} = spot;
    return (
        <div>

     <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">

  

	<ul className="flex flex-col divide-y divide-gray-700">
		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={image} />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8"> {touristSpotName}</h3>
							<p className="text-sm text-gray-400"> {countryName} </p>
						</div>
						<div className="text-right">
						
						</div>
					</div>
                    <p> <span className="text-purple-600">Ideal duration:  </span> {time} </p>
					<div className="flex text-sm divide-x">
						
						
							
							<span><span className="text-purple-600">Total Visitors Per Year: </span>{visitors} </span>
						
					</div>
				</div>
			</div>
		</li>
		
	</ul>
	<div className="space-y-1 text-right">
		
		<p ><span className="text-sm text-green-400 font-bold">Best time: </span> <span> {seasonality} </span> </p>
        <p> <span>Average cost:  </span>
			<span className="font-semibold"><span className="text-red-500">{cost}</span> </span>
		</p>
	</div>
	<div className="flex justify-end space-x-4">
		{/* <button type="button" className="px-6 py-2 border rounded-md border-violet-400">
			<span className="sr-only sm:not-sr-only"></span>
		</button> */}
		<Link  to={`/viewDetails/${_id}`}><button type="button" className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
			<span className="sr-only sm:not-sr-only">View Details</span>
		</button></Link>

  
	</div>
</div>
            
        </div>
    );
};

export default AllSpotCards;