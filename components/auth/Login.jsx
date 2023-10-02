import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = 'http://localhost:8080/users';

        try {
            const response = await axios.post(apiUrl, {
                username,
                password,
            });

            if (response.status === 200) {
                console.log('Login berhasil');
            } else {
                console.error('Login gagal');
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-medium">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}