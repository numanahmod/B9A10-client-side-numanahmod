import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Components/Navbar.css'
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";


const Update = () => {
    const {id} = useParams()
    console.log(id);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://b9a10-server-side-numanahmod.vercel.app/singleProduct/${id}`)
        .then(res=> res.json())
        .then(data =>{
            setProduct(data)
            console.log(data);
        })
    },[id])

     const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;

        const image = form.image.value;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
       

        const newUpdate = {image,touristSpotName, countryName, location, description,cost, seasonality, time, visitors,  }
        console.log(newUpdate); 

        fetch(`https://b9a10-server-side-numanahmod.vercel.app/updateSpot/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(newUpdate)
        })
        .then(res=> res.json())
        .then(data =>{
            
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'Updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        

     }

    return (
        <div className='lg:m-20 m-2 md:m-5 border-2 bg-pink-100 lg:p-8 p-2'>
            <Fade>
  

        <h2 className='text-center text-xl font-bold'> Update your added Tourists Spot </h2>
        <form  onSubmit={handleUpdate} className=''>
            <div className="lg:flex md:flex lg:gap-10 md:gap-5 ">
              <div className="flex-1">
              
              
                <label className="block mb-2 dark:text-white">
                  Image Url 
                </label>
                <input required
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Image Url "
                  id="name"
                  name="image"
                  defaultValue = {product.image}
                />
  
                <label
                  className="block mt-4 mb-2 dark:text-white"
                 
                >       Tourists spot name
                </label>
                <input
                required
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder=" Tourist spot name "
                  id="name"
                  name="touristSpotName"
                  defaultValue = {product.touristSpotName}
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                 
                >       Country name
                </label>
                <input
                required
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder=" Country name "
                  id="name"
                  name="countryName"
                  defaultValue={product.countryName}
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                 
                >       Location 
                </label>
                <input
                required
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="location"
                  id="name"
                  name="location"
                  defaultValue={product.location}
                  
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                 
                >        Short Description 
                </label>
                <input
                required
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Description"
                  id="name"
                  name="description"
                  defaultValue={product.description}
                />
  
 
                
  
               
              </div>
              {/* Right side */}
              <div className="flex-1">
              <label
                  className="block  mb-2 dark:text-white"
                 
                >
                 Seasonality
                </label>
               
                <input
                required
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder=" Add Season"
                  id="seasonality"
                  name="seasonality"
                  defaultValue={product.seasonality}
                />
  
                <label className="block mt-4  mb-2 dark:text-white">
                Travel time
                </label>
                <input
                required
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Travel time"
                  id="time"
                  name="time"
                  defaultValue={product.time}
                />
                <label className="block mb-2 mt-4 dark:text-white" >
                Total Visitors PerYear
                </label>
                <input
                required
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Total Visitors PerYear"
                  id="visitors"
                  name="visitors"
                  defaultValue={product.visitors}
                />
                 <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="price"
                >
                Average cost
                </label>
                <input
                required
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="Average_cost"
                  id="cost"
                  name="cost"
                  defaultValue={product.cost}
                />
  
  
                
              </div>
            </div>
  
            <input
            required
              className="px-4 w-full py-2 mt-4 rounded hover:bg-[#293096] bg-purple-400 duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Update"
              
            />
          </form>
          </Fade>
        </div>
    );
};

export default Update;