import { useState } from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import Loader from './loader'
import { GrEmptyCircle } from 'react-icons/gr'

function Table({ data, columns, loading }: any) {
	const [rowSelection, setRowSelection] = useState({})
	const table = useReactTable({
		data: data,
		columns: columns,
		enableRowSelection: true,
		state: {
			rowSelection,
		},
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
	})

	return (
		<div className="relative">
			<div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${data?.length == 0 && 'h-[200px]'}`}>
				<Loader loading={loading} size={40} color="#1d4ed8" />
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header: any) => (
									<th key={header.id} colSpan={header.colSpan} scope="col" className="px-6 py-3 whitespace-nowrap">
										{flexRender(header.column.columnDef.header, header.getContext())}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody>
						{table.getRowModel().rows.map((row: any) => (
							<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
								{row.getVisibleCells().map((cell: any) => (
									<th key={cell.id} className="px-6 py-4 whitespace-nowrap">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</th>
								))}
							</tr>
						))}
					</tbody>
				</table>
				{data?.length == 0 && !loading && (
					<div className="flex flex-col justify-center items-center h-full">
						<GrEmptyCircle size={40} color="#1d4ed8" />
						<p className="text-gray-500 dark:text-gray-400">Data tidak ditemukan</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Table
