import { Outlet } from "react-router"

const PublicTemplate = () => {
    return (
        <div>
            <h1>PublicTemplate</h1>
            <Outlet />
        </div>
    )
}

export default PublicTemplate