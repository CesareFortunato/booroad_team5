import { Link } from "react-router-dom"

function MainHeader() {
    return (
        <header className=" bg-white  border-bottom shadow-sm sticky-top " >
            <div className="container py-3 d-flex justify-content-center">
                <Link to="/" className="text-decoration-none">
                    <img
                        src="/images/booRoad_logo (2).png"
                        alt="BooRoad"
                        style={{ height: "60px", width: "auto" }}
                    />
                </Link>
            </div>
        </header>
    )
}

export default MainHeader