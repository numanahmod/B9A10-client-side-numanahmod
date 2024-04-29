import { Link } from "react-router-dom";


const TouristsSpotCard = ({spot}) => {
    const {image,touristSpotName, countryName, location, description,cost, seasonality, time, visitors, email, username, _id} = spot;
    return (
        <div className="card card-side bg-base-200 shadow-xl p-5">
          <figure><img className=" w-64  h-52 rounded-xl -mt-8" src={image}alt="Movie"/></figure>
       <div className="card-body">
       <h2 className=" -mt-8 pb-6"> <span className="text-xl text-red-600">Spot Name:</span> <span className="text-xl font-bold">{touristSpotName}</span></h2>
       <h2 className=" -mt-8 pb-6"> <span className="text-xl text-green-600">Country:</span> <span className="text-xl font-bold">{countryName}</span></h2>
       <h2 className=" -mt-8 pb-6"> <span className="text-xl text-red-600">Season:</span> <span className="text-xl font-bold">{seasonality}</span></h2>
      
        <div className="card-actions justify-center ">
      <Link to={`/viewDetails/${_id}`}>  <button className="btn btn-primary">View Details</button></Link>
     </div>
   </div>
  </div>
    );
};

export default TouristsSpotCard;