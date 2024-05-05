import { useState } from 'react'

function Soal1() {
	const [text, setText] = useState(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	)

	return (
		<div className="flex flex-col w-full">
			<label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
				1. Diberikan sebuah paragraf sebagai berikut, hitunglah berapa jumlah setiap karakter/huruf yang ada dalam
				paragraf tersebut:
			</label>
			<textarea
				className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				rows={4}
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<span className="font-bold text-[14px]"> Total character: {text?.length}</span>
		</div>
	)
}

export default Soal1
