import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <header>
            <Link to="/">
                <h1>BooRoad</h1>
            </Link>
        </header>
    )
}

export default MainHeader