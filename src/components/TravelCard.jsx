import { Link } from "react-router-dom";

function TravelCard({ trip }) {
    const { id, destination, startDate, endDate } = trip;

    return (
        <Link to={`/${id}`} className="text-decoration-none text-dark">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="https://picsum.photos/300/200?random=1"
                            className="img-fluid rounded-start"
                            alt={destination}
                        />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{destination}</h5>

                            <p className="card-text mb-1">
                                <small className="text-body-secondary">
                                    <strong>Inizio:</strong> {startDate}
                                </small>
                            </p>

                            <p className="card-text mb-0">
                                <small className="text-body-secondary">
                                    <strong>Fine:</strong> {endDate}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TravelCard;