import { Link } from "react-router-dom";

function TravelCard({ trip }) {

    //destructuring 
    const { destination, startDate, endDate } = trip;

    return (
<<<<<<< HEAD
=======
        <Link to={`/travels/${id}`} className="text-decoration-none text-dark">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/300/200?random=1"
                            className="img-fluid rounded-start"
                            alt={destination}
                        />
                    </div>
>>>>>>> 060173560cf5efe62ac15f55fedb5d968641a3b9

        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        {/* Nome viaggio  */}
                        <h5 class="card-title">{destination}</h5>
                        {/* data inizio   */}
                        <p className="card-text mb-1">
                            <small className="text-body-secondary">
                                <strong>Inizio:</strong> {startDate}
                            </small>
                        </p>
                        {/* Data fine  */}
                        <p className="card-text mb-0">
                            <small className="text-body-secondary">
                                <strong>Fine:</strong> {endDate}
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TravelCard;