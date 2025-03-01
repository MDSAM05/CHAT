import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='font-mono h-50 flex flex-col justify-center min-w-86 mx-auto'>
			<div className='w-full p-6 font- rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-green-500 text-center'>
					LOGIN
				</h1>

				<form>
					<div>
						<label className='label p-2 '>
							<span className='text-green-500 label-text text-md mt-2'>USERNAME</span>
						</label>
						<input type='text' placeholder='ENTER USERNAME' className='w-full mt-2 border-gray-200 hover:border-green-500 bg-white input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-green-500 border-gray-200 text-md mt-2'>PASSWORD</span>
						</label>
						<input
							type='password'
							placeholder='ENTER PASSWORD'
							className="w-full input mt-2 
							<span className='text-green-500 border-gray-200  hover:border-green-500 bg-white"
						/>
					</div>
					<Link
						to='/signup'
						className='text-sm  text-md hover:underline text-green-500 mt-3 inline-block'
					>
						{"DON'T"} HAVE AN ACCOUNT?
					</Link>

					<div>
					<button className="bg-green-500 text-xl mt-3 shadow-lg shadow-green-500/50 btn-block p-1">LOGIN</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
