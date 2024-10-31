import React, { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

export default function List() {


    const [shipments, setShipments] = useState([])
    useEffect(() => {
        axios.get("https://uts-if3b-2327250016-api.vercel.app/api/api/shipments")
            .then((response) => {
                console.log(response.data.result)
                setShipments(response.data.result)
            })
            .catch(error => {
                console.log('Error : ', error)
            })
    },
        [])

    return (
        <>
            <h2>Data Pengiriman</h2>

            <NavLink to="/shipments/create" className="btn btn-primary my-4">Create</NavLink>

            <ul className="list-group">
                {
                    <table className="table table-success table-striped-columns">
                        <thead>
                            <tr>
                                <th scope="col">Nama Pengirim</th>
                                <th scope="col">Nama Penerima</th>
                                <th scope="col">Alamat Penerima</th>
                                <th scope="col">Nama Barang</th>
                                <th scope="col">Tanggal Pengiriman</th>
                                <th scope="col">Jumlah Barang</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shipments.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.namaPengirim}</td>
                                            <td>{data.namaPenerima}</td>
                                            <td>{data.alamatPenerima}</td>
                                            <td>{data.namaBarang}</td>
                                            <td>{data.tanggalPengiriman}</td>
                                            <td>{data.jumlahBarang}</td>
                                           
                                        </tr>
                                ))}
                        </tbody>
                    </table>
                }
            </ul>
        </>
    )
}
