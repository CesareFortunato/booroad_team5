import TravelerCard from "../components/TravelerCard";
import { useParams } from "react-router-dom";
import trips from "../data/tripsArray";

function TravelDetailPage() {
  const { id } = useParams();
  const currentTrip = trips.find((trip) => trip.id == id);

  if (!currentTrip) return <div>Viaggio non trovato.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dettaglio Viaggio: {currentTrip.destination}</h1>
      <h3>Partecipanti:</h3>

      {/* Mappiamo direttamente qui per semplicità e velocità */}
      {currentTrip.participants.map((participant) => (
        <TravelerCard key={participant.id} participantProp={participant} />
      ))}
    </div>
  );
}

export default TravelDetailPage;
