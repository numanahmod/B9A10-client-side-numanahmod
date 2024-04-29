import { GiPlanetConquest } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then(result=>{
      toast.success('Your account is logged out')
			console.log(result.user);
			
    })
    .catch()
 
   
    
  }

  

   const navLinks =  <>
        <NavLink to='/' className={({isActive})=> isActive? 'btn font-bold btn2':'font-bold btn'}> Home </NavLink>

        <NavLink to='/allTouristSpot' className={({isActive})=> isActive? 'btn  font-bold btn2':'font-bold btn'}> All Tourists Spot    </NavLink>

        <NavLink to='/addTouristsSpot' className={({isActive})=> isActive? 'btn font-bold btn2':'font-bold btn'}> Add Tourists Spot  </NavLink>
        
        <NavLink to='/myList'className={({isActive})=> isActive? 'btn  font-bold btn2':'font-bold btn'}> My List   </NavLink>

       { !user && 
        <NavLink to='/register' className={({isActive})=> isActive? 'btn font-bold btn2':'font-bold btn'}>  Register </NavLink>
        }
   </>
    return (
        <div>
            <div className="navbar bg-base-100 fixed shadow-lg px-4 z-10 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-y-5">
      {navLinks}
      </ul>
    </div>
    <Link to={`/`}> <a className="btn btn-ghost  lg:text-xl md:text-xl lg:font-bold md:font-bold">  <GiPlanetConquest className="text-green-600" /> <span className=" text-red-800">Enjoy</span> <span className=" text-green-700">Nature </span> </a></Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3">
        {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  
  

   <div className="flex gap-4">
  
   
   <input type="checkbox" className="toggle" checked />
   {user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName}>
        <div className="w-10 rounded-full" >  
            <img className=""  alt="Please, reload" src={user?.photoURL} />
        </div>
      </div> }
   <div>
   {
    user ? 
    <button onClick={handleLogout} className="btn bg-amber-500"> LogOut </button>
    :
    <NavLink to='/login' className={({isActive})=> isActive? 'btn font-bold btn2':'font-bold btn'}> Login </NavLink>
   }
   <ToastContainer /> 
   </div>
   
    
   </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;