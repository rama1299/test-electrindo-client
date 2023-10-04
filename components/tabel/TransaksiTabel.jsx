import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TransaksiTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/transaksis');
                setTransactions(response.data.data);
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            }
        };

        fetchData();
    }, []);
    console.log(transactions)
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Daftar Transaksi</h2>
            <table className="min-w-full border border-collapse border-gray-300">
                <thead>
                    <tr>
                        <th className="text-left bg-gray-100 p-2">Tanggal</th>
                        <th className="text-left bg-gray-100 p-2">Wilayah</th>
                        <th className="text-left bg-gray-100 p-2">Nama Produk</th>
                        <th className="text-left bg-gray-100 p-2">Harga Produk</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td className="py-2 px-2 border">{transaction.tanggal}</td>
                                <td className="py-2 px-2 border">{transaction.wilayah}</td>
                                <td className="py-2 px-2 border">{transaction.Produk.name}</td>
                                <td className="py-2 px-2 border">{transaction.Produk.harga}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-2 px-2 border">
                                Tidak ada data transaksi.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TransaksiTable;
