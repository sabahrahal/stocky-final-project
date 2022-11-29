import React, { useContext, useEffect } from 'react'
import { Context } from "../../../store/appContext";

export const TableSuppliers = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getSuppliers();
    }, [])

    return (
        <div className='scroll-table'>
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Rif</th>
                        <th>Address</th>
                        <th className='text-center'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        store.suppliers.reverse().map((supplier) => {
                            return <tr>
                                <td>{supplier.name}</td>
                                <td>{supplier.phone}</td>
                                <td>{supplier.email}</td>
                                <td>{supplier.rif}</td>
                                <td>{supplier.address}</td>
                                <td className='text-center'><i class="bi bi-pencil-square table-edit-icon"></i></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
