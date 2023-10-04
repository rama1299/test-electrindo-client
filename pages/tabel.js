import Navbar from "@/components/layout/Navbar"
import UserTable from "@/components/tabel/UserTabel"
import TransaksiTable from "@/components/tabel/TransaksiTabel"

export default function tabel() {
    return(<>
    <Navbar></Navbar>
    <UserTable></UserTable>
    <TransaksiTable></TransaksiTable>
    </>

    )
}