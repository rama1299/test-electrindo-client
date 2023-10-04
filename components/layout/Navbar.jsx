import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-slate-500 p-4">
            <div className="container mx-auto flex justify-between items-center text-white font-sans text-md">
                <Link href="/">
                    My App
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/grafik">
                            Grafik
                        </Link>
                    </li>
                    <li>
                        <Link href="/tabel">
                            Tabel
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;