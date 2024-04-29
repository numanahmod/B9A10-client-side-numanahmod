import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/Firebase.config";

import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
import google from '/google.png'


const LogIn = () => {
    
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const githubProvider =new GithubAuthProvider();
    
    const {login } = useContext(AuthContext);

	const [showPassword, setShowPassword] = useState(false);

	
	
	const location = useLocation();
	const navigate = useNavigate(); 
	console.log('location in the login page', location);
	const handleLogin = e => {
		e.preventDefault();
        
   
		console.log(e.currentTarget);
		const form = new FormData(e.currentTarget);
		const email = form.get('email');
		const password = form.get('password')
		console.log(email,password);
	login(email, password)
  .then(result=>{
			console.log(result.user);
			toast.success('Login successfully')
 // navigate after login 
 navigate(location?.state? location.state: '/');
	const userC = {email};
	fetch('http://localhost:5000/user',{
		method: 'POST',
		headers: {
			'content-type' : 'application/json'
		},
		body: JSON.stringify(userC)
	})
	.then(res => res.json())
	.then(data => {
		console.log(data);
	})

 })

 
 .catch(error => {
			console.error(error) 
 toast.error('Email or Password does not match with registered account')
		})
		// toast.success('Login successfully')
		}

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result =>{
         const loggedInUser = result.user;
 toast.success('Login successfully with Google')
         console.log(loggedInUser);
	// navigate after login 
 navigate(location?.state? location.state: '/');
	
       

       
        
        })
        .catch(error => {
         console.log('error', error.message);
        })
		
		navigate(location?.state? location.state: '/');
		
    }
    const handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
			toast.success('Login successfully with Github')
            console.log(loggedUser);
			// navigate after login 
 navigate(location?.state? location.state: '/');
	
          
        
            navigate(location?.state? location.state: '/');
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
           {/* <Helmet>
            <title> Your Dream Home |Login </title>
           </Helmet> */}
            <div className="justify-center place-items-center lg:ml-[450px] md:ml-[200px] m-5 mb-12">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 mt-12 bg-pink-200 ">
               
            
			<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
	
	<div className="my-6 space-y-4">
		<button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 bg-purple-300">
			<img className="w-6 h-6" src={google} alt="" />
			<p>Login with Google</p>
		</button>
		<button onClick={handleGithubLogin}  aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 bg-purple-300">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
			<p>Login with GitHub</p>
		</button>
		
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
    
	<form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
	<div>
				<label htmlFor="email" className="block mb-2 font-bold">Email address</label>
				<input type="email" name="email" id="email" placeholder="your email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
			</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block font-bold">Password</label>
			<div className="flex relative">
			<input type={ showPassword ? "text" : "password"} name="password" id="password" placeholder="password"  className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" required/>
			<span className="absolute top-3 right-2 text-white" onClick={() => setShowPassword(!showPassword)}>
				{
					showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
				}
			</span>
			</div>
			<div className="flex justify-end text-xs text-red-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900  bg-red-400 font-bold">Login</button>
	</form>
    
    
	<div className="flex items-center pt-4 space-x-1">
		
	</div>
	<div className="flex justify-center space-x-4">
    
	</div>
	<p className="text-xs text-center sm:px-6 text-gray-950"> Do not have an account?
		<Link to='/register' rel="noopener noreferrer" href="#" className="underline text-blue-800 font-bold"> Register </Link>
	</p>
</div>
        </div>
       

     </div>
    );
};

export default LogIn ;