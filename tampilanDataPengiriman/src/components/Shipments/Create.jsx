import React, { useState } from "react";
import axios from "axios";

export default function CreateFakultas() {
    const [namaPengirim, setNamaPengirim] = useState("");
    const [namaPenerima, setNamaPenerima] = useState("");
    const [alamatPenerima, setAlamatPenerima] = useState("");
    const [namaBarang, setNamaBarang] = useState("");
    const [tanggalPengiriman, setTanggalPengiriman] = useState("");
    const [jumlahBarang, setJumlahBarang] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (namaPengirim.trim() === "" || namaPenerima.trim() === "" || alamatPenerima.trim() === "" || namaBarang.trim() === "" || tanggalPengiriman.trim() === "" || jumlahBarang.trim() === "") {
            setError("Semua Kolom Harus diisi");
            return;
        }

        try {
            const response = await axios.post(
                "https://uts-if3b-2327250016-api.vercel.app/api/api/shipments",
                {   namaPengirim : namaPengirim,
                    namaPenerima : namaPenerima,
                    alamatPenerima : alamatPenerima,
                    namaBarang : namaBarang,
                    tanggalPengiriman : tanggalPengiriman,
                    jumlahBarang : jumlahBarang
                 }
            );
            if (response.status === 201) {
                setSuccess("Shipments created successfully");
                setNamaPengirim("");
                setNamaPenerima("");
                setAlamatPenerima("");
                setNamaBarang("");
                setTanggalPengiriman("");
                setJumlahBarang("");
            } else {
                setError("Failed to create shipment");
            }
        } catch (error) {
            setError("An error occurred while creating shipment");
        }
    };

    return (
            <div className="container mt-5">
                <h2 className="mb-4">Tambah Pengiriman</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="namaPengirim" className="form-label">Nama Pengirim</label>

                        <input type="text" className="form-control" id="namaPengirim"
                            value={namaPengirim} onChange={(e) => setNamaPengirim(e.target.value)}
                            placeholder="Masukkan Nama Pengirim"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="namaPenerima" className="form-label">Nama Penerima</label>

                        <input type="text" className="form-control" id="namaPenerima"
                            value={namaPenerima} onChange={(e) => setNamaPenerima(e.target.value)}
                            placeholder="Masukkan Nama Penerima"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alamatPenerima" className="form-label">Alamat Penerima</label>

                        <input type="text" className="form-control" id="alamatPenerima"
                            value={alamatPenerima} onChange={(e) => setAlamatPenerima(e.target.value)}
                            placeholder="Masukkan Alamat Penerima"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="namaBarang" className="form-label">Nama Barang</label>

                        <input type="text" className="form-control" id="namaBarang"
                            value={namaBarang} onChange={(e) => setNamaBarang(e.target.value)}
                            placeholder="Masukkan Nama Barang"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tanggalPengiriman" className="form-label">Tanggal Pengiriman</label>

                        <input type="text" className="form-control" id="tanggalPengiriman"
                            value={tanggalPengiriman} onChange={(e) => setTanggalPengiriman(e.target.value)}
                            placeholder="Masukkan Tanggal Pengiriman"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="jumlahBarang" className="form-label">Jumlah Barang</label>

                        <input type="text" className="form-control" id="jumlahBarang"
                            value={jumlahBarang} onChange={(e) => setJumlahBarang(e.target.value)}
                            placeholder="Masukkan Jumlah Barang"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Tambah Data</button>
                </form>
            </div>


        );
    }