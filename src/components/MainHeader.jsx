import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <header
            className="p-4 bg-black">
            <Link to="/" className="text-decoration-none text-white">
                <h1>BooRoad</h1>
            </Link>
        </header>
    )
}

export default MainHeader