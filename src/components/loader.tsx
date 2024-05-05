import BarLoader from 'react-spinners/BarLoader'

function Loader(props: any) {
	const { loading } = props

	return (
		loading && (
			<div className="z-10 flex justify-center items-center absolute bg-white/40 h-full w-full">
				<BarLoader {...props} />
			</div>
		)
	)
}

export default Loader
