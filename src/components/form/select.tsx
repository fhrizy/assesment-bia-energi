interface SelectI {
	id?: string
	disabled?: boolean
	name?: string
	invalid?: any
	value?: string
	prefixIcon?: any
	label?: string
	className?: string
	options?: any
	onChange?(param: any): void
}

function Select(props: SelectI) {
	const handleChange = (e: any) => {
		if (props.onChange) {
			props.onChange(e)
		}
	}

	return (
		<div className="relative">
			{props.label && (
				<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.label}</label>
			)}
			<div className="relative">
				{props.prefixIcon && (
					<span className="absolute inset-y-3 left-0 flex items-center pl-3 text-gray-400">{props.prefixIcon}</span>
				)}
				<select
					id={props.id}
					disabled={props.disabled}
					value={props.value}
					name={props.name}
					onChange={handleChange}
					className={`${props.className} block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${props?.invalid ? 'border-red-600' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
				>
					<option value=""></option>
					{props.options.map((option: any) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
			{props.invalid && <span className="block text-xs text-red-600">{props.invalid}</span>}
		</div>
	)
}

export default Select
