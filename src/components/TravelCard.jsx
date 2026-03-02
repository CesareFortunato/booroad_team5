import { Link } from "react-router-dom";

function TravelCard({ trip }) {
  const { id, destination, startDate, endDate, image } = trip;

  return (
    <Link to={`/travels/${id}`} className="text-decoration-none">
      <div className="travel-hero-card">
        <img
          src={`/images/${image}`}
          alt={destination}
          className="travel-hero-card_img"
        />

        <div className="travel-hero-card_overlay">
          <div className="travel-hero-card_content">
            <h5 className="travel-hero-card_title">{destination}</h5>

            <p className="travel-hero-card_dates">
              <span>
                <strong>Inizio:</strong> {startDate}
              </span>
              <span className="mx-2">•</span>
              <span>
                <strong>Fine:</strong> {endDate}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TravelCard;
