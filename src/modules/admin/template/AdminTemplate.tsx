import { Outlet } from "react-router"

const AdminTemplate = () => {
    return (
        <div>
            <h1>AdminTemplate</h1>
            <Outlet />
        </div>
    )
}

export default AdminTemplate