import {  useContext, useEffect, useState } from "react";
// import useAuth from "../hooks/useAuth";
import { AuthContext } from "../providers/AuthProvider";
import CardMyList from "../Components/CardMyList";

const List = () => {
    // const {user } = useAuth() || {};
    const {user   } = useContext(AuthContext);
    const [items, setItems ] = useState([]);
    console.log(user);
    useEffect(() =>{
        fetch(`http://localhost:5000/addSpot/${user?.email}`)
        .then((res) => res.json())
        .then(data =>{
            console.log(data);
            setItems(data);
        })
    },[user])
    return (
        <div>
            <h2 className="mt-20">My list is here </h2>

            {user.email}
            {user.time}

            {/* <div>
                {
                    items?.map( item => (
                        <div key={user.email}>
                            <p>Name:  {item.username} </p>
                        </div>
                    ))
                }
            </div> */}
            <div className='grid md:grid-cols-2 gap-8'>
                {
                  items.map( item => <CardMyList key={item._id} spot ={item}>

                  </CardMyList>)
                }
                </div>

         <p>  {user.username}</p>
            <p>Ami nai kn </p>
        </div>
    );
};

export default List;