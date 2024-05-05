import { useMemo, useContext, useState, useRef, useCallback } from 'react'
import Table from '../table'
import UserContext from '../../stores/userContext'
import Modal from '../modal'
import Input from '../form/input'
import moment from 'moment'
import Loader from '../loader'
import Select from '../form/select'
import SimpleReactValidator from 'simple-react-validator'
import { BsPencilSquare, BsPersonCircle, BsTrash } from 'react-icons/bs'

function Soal3() {
	const { loading, users, addUser, deleteUser, updateUser } = useContext(UserContext)
	const [showModal, setShowModal] = useState(false)
	const [modalDetail, setModalDetail] = useState(false)
	const [formLoading, setFormLoading] = useState(false)
	const [form, setForm] = useState<any>({})
	const [type, setType] = useState<string>('Add')
	const [, updateState] = useState<object>()
	const rerenderPage = useCallback(() => updateState({}), [])
	const validator = useRef(new SimpleReactValidator())

	const columns = useMemo(
		() => [
			{
				header: 'No',
				cell: ({ row }: any) => <>{row.index + 1}</>,
			},
			{
				accessorKey: 'nama',
				header: 'Nama',
			},
			{
				accessorKey: 'alamat',
				header: 'Alamat',
			},
			{
				accessorKey: 'jenis_kelamin',
				header: 'P/W',
			},
			{
				accessorKey: 'tanggal_lahir',
				header: 'Tanggal Lahir',
			},
			{
				accessorKey: 'tanggal_input',
				header: 'Tanggal Input',
			},
			{
				header: 'Aksi',
				cell: ({ row }: any) => (
					<div className="flex gap-4 items-center">
						<BsPersonCircle
							className="cursor-pointer"
							size={24}
							onClick={() => {
								setForm(row.original)
								setModalDetail(true)
							}}
						>
							View
						</BsPersonCircle>
						<BsPencilSquare
							className="cursor-pointer"
							size={24}
							color="#42ba96"
							onClick={() => {
								setForm(row.original)
								setShowModal(true)
								setType('Ubah')
							}}
						>
							Ubah
						</BsPencilSquare>
						<BsTrash className="cursor-pointer" size={24} onClick={() => deleteUser(row.original.id)} color="#df4759">
							Hapus
						</BsTrash>
					</div>
				),
			},
		],
		[],
	)

	const handleChange = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const submit = () => {
		if (!validator.current.allValid()) {
			validator.current.showMessages()
			rerenderPage()
			return
		}

		setFormLoading(true)
		const data = form
		if (type === 'Tambah') {
			data.id = users.length + 1
			data.tanggal_input = moment().format('DD MMM YYYY, HH:mm:ss')
		}

		setTimeout(() => {
			if (type === 'Tambah') addUser(data)
			if (type === 'Ubah') updateUser(data)
			setFormLoading(false)
			setShowModal(false)
			setForm({})
		}, 1000)
	}

	return (
		<>
			<label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
				3. Buatlah sebuah program menggunakan ReactJS yang menampilkan sebuah tabel yang berisi data list user dan form
				untuk menambah data user:
			</label>
			<button
				className="w-[150px] inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
				onClick={() => {
					setShowModal(true)
					setType('Tambah')
				}}
			>
				Tambah User
			</button>
			<Table columns={columns} data={users} loading={loading} />
			<Modal title={`Detail User`} isOpen={modalDetail} onClose={() => setModalDetail(false)}>
				<div className="flex flex-col w-full gap-4">
					<div className="flex flex-col w-full gap-4">
						<Input label="Nama" value={form?.nama} disabled />
						<Input label="Alamat" value={form?.alamat} disabled />
						<Input label="Jenis Kelamin" value={form?.jenis_kelamin === 'P' ? 'Pria' : 'Wanita'} disabled />
						<Input label="Tanggal Lahir" value={form?.tanggal_lahir} disabled />
						<Input label="Tanggal Input" value={form?.tanggal_input} disabled />
					</div>
				</div>
			</Modal>
			<Modal title={`${type} User`} isOpen={showModal} onClose={() => setShowModal(false)}>
				<div className="relative">
					<Loader loading={formLoading} size={40} color="#1d4ed8" />
					<div className="flex flex-col w-full gap-4">
						<Input
							label="Nama"
							name="nama"
							value={form?.nama}
							onChange={handleChange}
							invalid={validator.current.message('nama', form?.nama, 'required')}
						/>
						<Input
							label="Alamat"
							name="alamat"
							value={form?.alamat}
							onChange={handleChange}
							invalid={validator.current.message('alamat', form?.alamat, 'required')}
						/>
						<Select
							label="Jenis Kelamin"
							name="jenis_kelamin"
							value={form?.jenis_kelamin}
							onChange={handleChange}
							options={[
								{ value: 'P', label: 'Pria' },
								{ value: 'W', label: 'Wanita' },
							]}
							invalid={validator.current.message('jenis_kelamin', form?.jenis_kelamin, 'required')}
						/>
						<Input
							label="Tanggal Lahir"
							name="tanggal_lahir"
							value={form?.tanggal_lahir}
							onChange={handleChange}
							type="date"
							invalid={validator.current.message('tanggal_lahir', form?.tanggal_lahir, 'required')}
						/>
					</div>
					<div className="flex justify-end mt-8">
						<button
							className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
							onClick={submit}
						>
							Submit
						</button>
					</div>
				</div>
			</Modal>
		</>
	)
}

export default Soal3
