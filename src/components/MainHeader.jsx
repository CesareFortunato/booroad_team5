import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <header className="bg-white border-bottom shadow-sm">
            <div className="container py-3 d-flex justify-content-center">
                <Link to="/" className="text-decoration-none">
                    <span className="fs-2 fw-bold text-primary">BooRoad</span>
                </Link>
            </div>
        </header>
    )
}

export default MainHeader