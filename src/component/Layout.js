import { Link } from "react-router-dom";


const Layout = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/Leaderboard" className="link">Leaderboard</Link>
                </li>
                <li>
                    <Link to="/Registration" className="link">Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default Layout