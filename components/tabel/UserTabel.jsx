import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/users')
                setUsers(response.data.data)
            } catch (error) {

            }
        };

        fetchData()
    }, []);
    console.log(users)
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Daftar Pengguna</h2>
            <table className="min-w-full border border-collapse border-gray-300">
                <thead>
                    <tr>
                        <th className="text-left bg-gray-100 p-2">Username</th>
                        <th className="text-left bg-gray-100 p-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td className="py-2 px-2 border">{user.username}</td>
                                <td className="py-2 px-2 border">{user.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="py-2 px-2 border">
                                Tidak ada data pengguna.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    );
}

export default UserTable;
