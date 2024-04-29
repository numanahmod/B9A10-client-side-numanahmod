import { useLoaderData, useParams } from 'react-router-dom';

// import { Helmet } from 'react-helmet-async';
import 'animate.css';

const ViewDetails = () => {
    
const details = useLoaderData()
const {_id} = useParams();

const id = details.find((i) => i._id == _id  );

  

const {image,touristSpotName, countryName, location, description,cost, time, visitors, email, } = id; 

    return (
        <div> 
            {/* <Helmet>
            <title> Your Dream Home | HN: {Id} </title>
           </Helmet> */}
           <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
			{details.length}
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={image} alt="" className="w-full h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 dark:bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Active wear from the Nordstrom Anniversary Sale</a>
				<p className="text-xs text-gray-400 dark:text-gray-600">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
				</p>
			</div>
			<div className="text-gray-100 dark:text-gray-800">
				<p>Insert the actual text content here...</p>
				<p></p>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default ViewDetails;