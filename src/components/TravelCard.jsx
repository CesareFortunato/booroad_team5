import { Link } from "react-router-dom";

function TravelCard({ trip }) {
  const { id, destination, startDate, endDate, image } = trip;

  return (
    <Link to={`/travels/${id}`} className="text-decoration-none text-dark">
      <div className="card border-0 shadow-sm overflow-hidden travel-card " >
        
        <img
          src={`/images/${image}`}
          className="card-img-top"
          alt={destination}
          style={{ height: 280, objectFit: "cover" }}
        />

        
        <div className="card-body ">
          <h5 className="card-title ">{destination}</h5>

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
    </Link>
  );
}

export default TravelCard;