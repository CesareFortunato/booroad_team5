import { useState } from "react";
import { useParams } from "react-router-dom";
import TravelerCard from "../components/TravelerCard";
import trips from "../data/tripsArray";
import { Link } from "react-router-dom";


function TravelDetailPage() {

  const { id } = useParams();
  const currentTrip = trips.find((trip) => trip.id == id);

  const [search, setSearch] = useState("");

  const [participants, setParticipants] = useState(currentTrip.participants);

  // State per il form
  const [newParticipant, setNewParticipant] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    taxCode: "",
    emergencyContact: ""
  });

  if (!currentTrip) {
    return <div className="container py-4">Viaggio non trovato.</div>;
  }

  const query = search.trim().toLowerCase();

  const filteredParticipants = participants.filter((p) => {
    const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
    return fullName.includes(query);
  });

  // Funzione per aggiungere partecipante
  const handleAddParticipant = () => {
    const participantToAdd = {
      ...newParticipant,
      id: participants.length + 1,
    };

    setParticipants([...participants, participantToAdd]);

    setNewParticipant({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      taxCode: "",
      emergencyContact: ""
    });
  };


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

        {/* Form per aggiungere partecipante */}
        <div className="card p-3 mb-4 mt-5 w-50 mx-auto">
          <h5>Aggiungi partecipante</h5>

          <input
            type="text"
            placeholder="Nome"
            className="form-control mb-2"
            value={newParticipant.firstName}
            onChange={(e) =>
              setNewParticipant({ ...newParticipant, firstName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Cognome"
            className="form-control mb-2"
            value={newParticipant.lastName}
            onChange={(e) =>
              setNewParticipant({ ...newParticipant, lastName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Telefono"
            className="form-control mb-2"
            value={newParticipant.phoneNumber}
            onChange={(e) =>
              setNewParticipant({ ...newParticipant, phoneNumber: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="form-control mb-2"
            value={newParticipant.email}
            onChange={(e) =>
              setNewParticipant({ ...newParticipant, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Codice Fiscale"
            className="form-control mb-2"
            value={newParticipant.taxCode}
            onChange={(e) =>
              setNewParticipant({ ...newParticipant, taxCode: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Contatto Emergenza"
            className="form-control mb-3"
            value={newParticipant.emergencyContact}
            onChange={(e) =>
              setNewParticipant({
                ...newParticipant,
                emergencyContact: e.target.value,
              })
            }
          />

          <button
            className="btn btn-success"
            onClick={handleAddParticipant}
          >
            Aggiungi
          </button>
        </div>

        {/* Bottone indietro */}
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