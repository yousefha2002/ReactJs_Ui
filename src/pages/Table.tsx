import React from 'react'
import TableBox from '../components/table/TableBox';

export type TableColumn<T> = {
  header: string;
  accessor: keyof T;
}

type Product = {
  id:number,
  title:string
}

const data:Product[] = [{id:1,title:"Shirt"},{id:2,title:"Shoes"}]

const columns: TableColumn<Product>[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Title', accessor: 'title' },
];

export default function Table() {

    const renderButtons = (id:number) => (
        <>
            <button key="update-button" className="ml-2 text-blue-500 hover:text-blue-700">Update</button>
            <button key="delete-button" className="ml-2 text-red-500 hover:text-red-700">Delete</button>
        </>
    );

    return (
        <div className='Container'>
            <TableBox
            data={data}
            columns={columns}
            renderButtons={renderButtons}
            />
        </div>
    )
}