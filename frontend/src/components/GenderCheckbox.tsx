const GenderCheckbox = ({ selectgender, oncheckboxChange }: { 
	selectgender: string; 
	oncheckboxChange: (gender: string) => void; 
}) => {
	return (
		<div className='flex'>
			<div className='form-control mt-4'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type='checkbox' 
					checked = {selectgender === "male"}
					className='checkbox border-green-500'
					onChange ={() => oncheckboxChange("male")} />
				</label>
			</div>
			<div className='form-control mt-4'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type='checkbox' 
					checked = {selectgender === "female"}
					className='checkbox border-green-500'
					onChange ={() => oncheckboxChange("male")}  />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
