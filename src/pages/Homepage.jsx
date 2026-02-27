import TravelCard from "../components/TravelCard"
import trips from "../data/tripsArray"

function HomePage() {

    return (

        <div className="container py-4">
            <h1 className="mb-4 text-center">I tuoi viaggi</h1>

            {/* logica del map  */}
            <section className="d-flex flex-column align-items-center gap-3">
                {/* Map  */}
                <TravelCard/>
            </section>
        </div>
    )
}