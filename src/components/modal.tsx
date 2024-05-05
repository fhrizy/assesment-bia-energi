const Modal = ({ isOpen, onClose, children, title }: any) => {
	if (!isOpen) return null

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
			<div className="bg-white p-6 rounded shadow-lg lg:w-2/5 md:w-3/5 w-4/5">
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold">{title}</h3>
					<button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
						<svg
							className="w-6 h-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
				<div className="mt-4">{children}</div>
			</div>
		</div>
	)
}

export default Modal
