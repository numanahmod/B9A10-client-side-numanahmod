import {   useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
// import { AuthContext } from "../providers/AuthProvider";
// import CardMyList from "../Components/CardMyList";

const List = () => {
    const {user } = useAuth() || {};
    // const {user   } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [control, setControl] = useState(false);
    console.log(items);
    console.log(user);
    useEffect(() =>{
        fetch(`https://b9a10-server-side-numanahmod.vercel.app/myList/${user?.email}`)
        .then((res) => res.json())
        .then(data =>{
           
            setItems(data);
        })

    },[user, control])

    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9a10-server-side-numanahmod.vercel.app/delete/${id}`, {
                    method: 'DELETE'
                })
                .then((res) => res.json())
                .then(data =>{
                   if (data.deletedCount > 0) {
                    setControl(!control)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    
                   }
                })
             
            }
          });

       
    }
    return (
        <div className=" bg-white">
            <Fade>
  


           <p className=" text-3xl font-bold  text-center mt-4 ">My added List </p>

            <div>
                {
                    items?.map( item => (
                        <div key={user.email} className="bg-green-300 p-6 m-2">
                            
                            
                           
                            

     <table className="lg:ml-12 md:ml-4">
        <thead>
          <tr className="lg:flex col-span-6 justify-start lg:gap-28 md:pr-10">
            <th> Country </th>
            <th>Average Cost</th>
            <th className=" -ml-8"> Visitors</th>
            <th className=" -ml-4"> Duration </th>
            <th className="ml-2"> Update </th>
            <th className=" -ml-12"> Delete </th>
           
          </tr>
        </thead>
        <tbody>
          <tr className="lg:flex col-span-6 justify-start  lg:gap-28 md:pr-10">
            <td>{item.countryName} </td>
            <td> {item.cost} </td>
            <td>  {item.visitors} </td>
            <td>  {item.time} </td>
            <td className="ml-2"><Link to={`/update/${item._id}`}> <button className="btn btn-primary gap-5 mr-8"> Update </button></Link></td>
            <td className=" -ml-28"><button onClick={()=>handleDelete(item._id)} className="btn btn-primary"> Delete </button></td>
          </tr>
         
        </tbody>
      </table>
                        </div>
                    ))
                }
            </div>
           

      
            </Fade>
        </div>
    );
};

export default List;