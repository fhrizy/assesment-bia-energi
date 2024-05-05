import { useState } from 'react'
import Input from '../form/input'

function Soal2() {
	const [resultA, setResultA] = useState('')
	const [resultB, setResultB] = useState('')
	const [resultC, setResultC] = useState('')
	const [resultD, setResultD] = useState('')

	function handleA(e: any) {
		const { value } = e.target
		var sequence = []
		for (var i = 0; i < value; i++) {
			sequence.push(i * i)
		}
		setResultA(sequence.join(', '))
	}

	function handleB(e: any) {
		const { value } = e.target
		var sequence = []
		for (var i = 0; i < value; i++) {
			sequence.push(i * i + 1)
		}
		setResultB(sequence.join(', '))
	}

	function handleC(e: any) {
		const { value } = e.target
		var sequence = [0, 1]
		for (var i = 2; i < value; i++) {
			sequence.push(sequence[i - 1] + sequence[i - 2])
		}
		setResultC(sequence.join(', '))
	}

	function handleD(e: any) {
		const { value } = e.target
		let sequence = [0, 0]
		for (let i = 2; i < value; i++) {
			sequence.push(sequence[i - 1] + sequence[i - 2] + 1)
		}
		setResultD(sequence.join(', '))
	}

	return (
		<div className="flex flex-col w-full gap-2">
			<label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
				2. Buatlah kode pemrograman untuk menampilkan deret angka sebagai berikut, sebanyak nilai yang diinput oleh
				user:
			</label>
			<Input
				className="!w-1/2"
				label="a. 0 1 4 9 16 25 36 49 64 81 100 dst..."
				placeholder="Masukan jumlah yang ingin di hasilkan"
				onChange={handleA}
			/>
			<div className="font-bold text-[14px]">Result: {resultA}</div>
			<Input
				className="!w-1/2"
				label="b. 1 2 5 10 17 26 37 50 65 82 dst..."
				placeholder="Masukan jumlah yang ingin di hasilkan"
				onChange={handleB}
			/>
			<div className="font-bold text-[14px]">Result: {resultB}</div>
			<Input
				className="!w-1/2"
				label="c. 0 1 1 2 3 5 8 13 21 34 55 dst..."
				placeholder="Masukan jumlah yang ingin di hasilkan"
				onChange={handleC}
			/>
			<div className="font-bold text-[14px]">Result: {resultC}</div>
			<Input
				className="!w-1/2"
				label="d. 0 0 1 2 4 7 12 20 33 54 dst..."
				placeholder="Masukan jumlah yang ingin di hasilkan"
				onChange={handleD}
			/>
			<div className="font-bold text-[14px]">Result: {resultD}</div>
		</div>
	)
}

export default Soal2
