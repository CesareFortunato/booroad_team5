import { useState } from "react";
import { useParams } from "react-router-dom";
import TravelerCard from "../components/TravelerCard";
import trips from "../data/tripsArray";

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
    <div className="container py-4">
      <h1>Dettaglio Viaggio: {currentTrip.destination}</h1>

      {/* Search Bar */}
      <div className="my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca partecipante..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Lista partecipanti */}
      <div className="d-flex flex-column gap-2">
        {filteredParticipants.length === 0 ? (
          <div className="alert alert-warning">
            Nessun partecipante trovato.
          </div>
        ) : (
          filteredParticipants.map((participant) => (
            <TravelerCard participantProp={participant} key={participant.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default TravelDetailPage;
