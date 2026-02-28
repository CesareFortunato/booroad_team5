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
    <>
      <img
        className="image-detail"
        src={`../public/images/${currentTrip.image}`}
        alt={`${currentTrip.destination}`}
      />
      <div className="flex-column d-flex justify-content-center">
        <h1>{currentTrip.destination}</h1>
        <h6>
          {currentTrip.startDate}-{currentTrip.endDate}
        </h6>
        <div>Partecipanti:{renderParticipants()}</div>
      </div>
    </>
  );
}
export default TravelDetailPage;
