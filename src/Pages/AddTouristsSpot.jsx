import Swal from 'sweetalert2'

import '../Components/Navbar.css'





const AddTouristsSpot = () => {
    const handleAddSpot = e =>{
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
        const email = form.email.value;
        const username = form.username.value;

        const newAdd = {image,touristSpotName, countryName, location, description,cost, seasonality, time, visitors, email, username }
        console.log(newAdd);

        //send data to the server 

        fetch('http://localhost:5000/addSpot',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newAdd)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                
            }

        } )

    }
   
    
    
    return (
       <>
      <div className='m-20 border-2 bg-pink-100 p-8'>
      <h2 className='text-center text-xl font-bold'>Add Tourists Spot </h2>
      <form onSubmit={handleAddSpot} className=''>
          <div className="flex gap-10 ">
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
              />
              

             
            </div>
            {/* Right side */}
            <div className="flex-1">
            <label
                className="block  mt-4 mb-2 dark:text-white"
               
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
              />

              <label className="block  mb-2 dark:text-white">
              Travel time
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Travel time"
                id="time"
                name="time"
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
              />

<label
                className="block mt-4 mb-2 dark:text-white"
               
              >
                User name 
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                
                type="text"
                placeholder="User name"
                id="name"
                name="username"
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
               
              >
                User Email
              </label>
              <input
              required
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                
                type="email"
                placeholder="User Email"
                id="email"
                name="email"
              />
              
            </div>
          </div>

          <input
          required
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#293096] bg-purple-400 duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add"
          />
        </form>
      </div>
       </>
    );
};

export default AddTouristsSpot;