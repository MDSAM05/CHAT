import { Link } from "react-router-dom";
import GenderCheckbox from "../components/GenderCheckbox";

const SignUp = () => {
	return (
		<div className='flex flex-col font-mono items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl  text-green-500 font-semibold text-center'>
					SIGN UP <span className='text-green-500'> CHATAPP</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base mt-2 text-green-500 label-text'>FULL NAME</span>
						</label>
						<input type='text' placeholder='JOHN DOE' className='w-full bg-white mt-2 hover:outline-green-500 input input-bordered  h-10' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base text-green-500 label-text'>USERNAME</span>
						</label>
						<input type='text' placeholder='JOHN DOE' className='w-full mt-2  hover:outline-green-500 bg-white input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base mt-2 text-green-500 label-text'>PASSWORD</span>
						</label>
						<input
							type='password'
							placeholder='ENTER PASSWORD'
							className='w-full bg-white mt-2 hover:outline-green-500 input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base mt-2 text-green-500 label-text'>CONFIRM PASSWORD</span>
						</label>
						<input
							type='password'
							placeholder='CONFIRM PASSWORD'
							className='w-full bg-white mt-2 hover:outline-green-500 input input-bordered h-10'
						/>
					</div>

					<GenderCheckbox />

					<Link
						to={"/login"}
						className='text-sm hover:underline text-green-500 mt-2 inline-block'
					>
						ALERADY HAVE AN ACCOUNT?
					</Link>

					<div>
						<button className='btn btn-block font-medium bg-green-500 btn-sm mt-2 border border-green-700'>SIGN UP</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;
