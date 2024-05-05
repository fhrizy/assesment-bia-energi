// UserContext.js
import moment from 'moment'
import { createContext, useEffect, useState } from 'react'

const UserContext = createContext({
	loading: true,
	users: [],
	addUser: (_user: any) => {},
	deleteUser: (_userId: any) => {},
	updateUser: (_user: any) => {},
})

export const UserProvider = ({ children }: any) => {
	const [loading, setLoading] = useState(true)
	const [users, setUsers] = useState<any>([])

	useEffect(() => {
		setTimeout(() => {
			setUsers([
				{
					id: 1,
					nama: 'Fichar Rozy',
					alamat: 'Jl. Kebon Jeruk',
					jenis_kelamin: 'P',
					tanggal_lahir: '07 08 1999',
					tanggal_input: moment().format('DD MMM YYYY, HH:mm:ss'),
				},
			])
			setLoading(false)
		}, 1000)
	}, [])

	const addUser = (user: any) => {
		setLoading(true)
		setTimeout(() => {
			setUsers([...users, user])
			setLoading(false)
		}, 1000)
	}

	const deleteUser = (userId: any) => {
		setLoading(true)
		setTimeout(() => {
			setUsers(users.filter((user: any) => user.id !== userId))
			setLoading(false)
		}, 1000)
	}

	const updateUser = (user: any) => {
		setLoading(true)
		setTimeout(() => {
			setUsers(users.map((u: any) => (u.id === user.id ? user : u)))
			setLoading(false)
		}, 1000)
	}

	return (
		<UserContext.Provider value={{ loading, users, addUser, deleteUser, updateUser }}>{children}</UserContext.Provider>
	)
}

export default UserContext
