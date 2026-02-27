import TravelerCard from "../components/TravelerCard";
import { useParams } from "react-router-dom";
import trips from "../data/tripsArray";

function TravelDetailPage() {
  const { id } = useParams();
  const currentTrip = trips.find((trip) => trip.id == id);
  if (!currentTrip) return <div>Viaggio non trovato.</div>;

  function renderParticipants() {
    return currentTrip.participants.map((participant) => {
      return (
        <TravelerCard participantProp={participant} key={participant.id} />
      );
    });
  }

  return (
    <div>
      <h1>Dettaglio Viaggio: {currentTrip.destination}</h1>
      <h3>Partecipanti:{renderParticipants()}</h3>
    </div>
  );
}
export default TravelDetailPage;
