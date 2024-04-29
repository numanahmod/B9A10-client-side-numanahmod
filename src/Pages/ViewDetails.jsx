import { Link, useLoaderData, useParams } from 'react-router-dom';

// import { Helmet } from 'react-helmet-async';
import 'animate.css';

const ViewDetails = () => {
    
const details = useLoaderData()
const {_id} = useParams();

const id = details.find((i) => i._id == _id  );

  

const {image,touristSpotName, countryName, location, description,cost, time, visitors, email, seasonality, username  } = id; 

    return (
        <div> 
            {/* <Helmet>
            <title> Your Dream Home | HN: {Id} </title>
           </Helmet> */}
           <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-300 dark:bg-gray-100 text-gray-100 dark:text-green-800 ">
		
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={image} alt="" className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 dark:bg-gray-50">
			<div className="space-y-2">
				<p  className="inline-block text-3xl sm:text-3xl  text-yellow-500 font-bold">{touristSpotName} </p>
				<p className="text-xl text-gray-400 dark:text-gray-600">
					<p  className=" hover:underline"> {countryName} </p>
				</p>
			</div>
			<div className="text-gray-100 dark:text-gray-800">
				<p> <span>Description: </span> <span className=' text-orange-600'>{description}</span> </p>
				
			</div>
			<div className="text-gray-100 dark:text-gray-800">
				<p> <span>Total Visitors Per Year: </span> <span className=' text-yellow-500'>{visitors}</span> </p>
			
			</div>
			<div className="text-gray-100 dark:text-gray-800">
				<p> <span>Location: </span> <span className=' text-yellow-500'>{location}</span> </p>
				<p></p>
			</div>
			<div className="text-gray-100 dark:text-gray-800">
				<p> <span>Ideal duration: </span> <span className=' text-yellow-500'>{time}</span> </p>
			
			</div>
			<div className="text-gray-100 dark:text-gray-800">
				<p> <span>Best time: </span> <span className=' text-yellow-500'>{seasonality}</span> </p>
				
			</div>
			<div className="text-gray-100 dark:text-gray-800">
				<p> <span>Average Cost: </span> <span className=' text-yellow-500'>{cost}</span> </p>
				
			</div>
			<div className="text-gray-100 dark:text-gray-800">
				<p> <span>User Name: </span> <span className=' text-yellow-500'>{username}</span> </p>
				
			</div>
			<div className="text-gray-100 dark:text-gray-800">
				<p> <span>User email: </span> <span className=' text-yellow-500'>{email}</span> </p>
				
			</div>
			<Link to='/contact'><button className=' btn bg-orange-800 lg:ml-60 ml-32 mt-6'> Contact  </button></Link>
		</div>
	</div>
</div>
        </div>
    );
};

export default ViewDetails;