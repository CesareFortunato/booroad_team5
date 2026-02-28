import { useState } from "react";
import { useParams } from "react-router-dom";
import TravelerCard from "../components/TravelerCard";
import trips from "../data/tripsArray";
import { Link } from "react-router-dom";
function TravelDetailPage() {
  const { id } = useParams();
  const currentTrip = trips.find((trip) => trip.id == id);

  const [search, setSearch] = useState("");

  if (!currentTrip) {
    return <div className="container py-4">Viaggio non trovato.</div>;
  }

  const query = search.trim().toLowerCase();

  const filteredParticipants = currentTrip.participants.filter((p) => {
    const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
    return fullName.includes(query);
  });

  return (

    <>
      <section className="trip-hero-card">
        <img
          className="trip-hero-card_img"
          src={`/images/${currentTrip.image}`}
          alt={currentTrip.destination}
        />

        <div className="trip-hero-card_overlay">
          <div className="trip-hero-card_content">
            <h1 className="trip-hero-card_title">{currentTrip.destination}</h1>
            <p className="trip-hero-card_dates">
              {currentTrip.startDate} / {currentTrip.endDate}
            </p>
          </div>

        </div>

        {/*<div>Partecipanti:{renderParticipants()}</div>*/}
      </section>


      <div className="container py-4">
        <h1 className="mb-4 text-center card_detail_title">Lista partecipanti</h1>

        {/* Search Bar */}
        <div className="my-4 traveler-card">
          <input
            type="text"
            className="form-control"
            placeholder="Cerca partecipante..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Lista partecipanti */}
        <div className="d-flex flex-column gap-3">
          {filteredParticipants.length === 0 ? (
            <div className="alert alert-warning">
              Nessun partecipante trovato.
            </div>
          ) : (
            filteredParticipants.map((participant) => (
              <TravelerCard
                participantProp={participant}
                key={participant.id}
              />
            ))
          )}
        </div>
        <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary trip_card_btn">
          Indietro
        </Link>
        </div>
      </div>
    </>
  );
}

export default TravelDetailPage;