import { Link } from "react-router-dom";
import {  useState } from "react"
import GenderCheckbox from "../components/GenderCheckbox";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName:"",
		Username:"",
		password:"",
		confirmPassword:"",
		gender:"",

	})

	const handleGender = (gender: string) =>
	{
        setInputs({...inputs, gender})
	}
	
	const {Loading, signup} = useSignup()
	const handleSubmit = (e: React.FormEvent) =>
	{
       e.preventDefault();
	   signup(inputs);
	}
	return (
		<div className='flex flex-col font-mono items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl  text-green-500 font-semibold text-center'>
					SIGN UP <span className='text-green-500'> CHATAPP</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-1 mt-2'>
							<span className='text-base mt-2 text-green-500 label-text'>FULL NAME</span>
						</label>
						<input type='text' 
						 value = {inputs.fullName}
						 onChange = {(e) => setInputs({... inputs, fullName: e.target.value})}
						 placeholder='JOHN DOE' className='w-full text-black bg-white mt-2 hover:outline-green-500 input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-1 mt-2'>
							<span className='text-base text-green-500 label-text'>USERNAME</span>
						</label>
						<input type='text' 
						placeholder='JOHN DOE'
						value = {inputs.Username}
						onChange = {(e) => setInputs({... inputs, Username: e.target.value})}
						 className='w-full mt-2 text-black hover:outline-green-500 bg-white input input-bordered h-10' />
					</div>

					<div>
						<label className='label mt-2'>
							<span className='text-base  text-green-500 label-text'>PASSWORD</span>
						</label>
						<input
							type='password'
							placeholder='ENTER PASSWORD'
							value = {inputs.password}
							onChange = {(e) => setInputs({... inputs, password: e.target.value})}
							className='w-full text-black bg-white mt-2 hover:outline-green-500 input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label mt-2'>
							<span className='text-base mt-2 text-green-500 label-text'>CONFIRM PASSWORD</span>
						</label>
						<input
							type='password'
							placeholder='CONFIRM PASSWORD'
							value = {inputs.confirmPassword}
							onChange = {(e) => setInputs({... inputs, confirmPassword: e.target.value})}
							className='w-full text-black bg-white mt-2 hover:outline-green-500 input input-bordered h-10'
						/>
					</div>

					<GenderCheckbox
					
					selectgender = {inputs.gender}
					oncheckboxChange = {handleGender}
					/>

					<Link
						to={"/login"}
						className='text-sm hover:underline text-green-500 mt-2 inline-block'
					>
						ALERADY HAVE AN ACCOUNT?
					</Link>

					<div>
						<button  disabled = {Loading} 
						className='btn btn-block text-lg bg-green-500 btn-sm mt-2 border border-green-700'>
						{Loading ? "...Loading" : "Sign Up"}</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
