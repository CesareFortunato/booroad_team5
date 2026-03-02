import TravelCard from "../components/TravelCard";
import { useState } from "react";
import trips from "../data/tripsArray";
import TravelForm from "../components/TravelForm";

function HomePage() {
  const [tripsList, setTripsList] = useState(trips);

  const addTrip = (newTripData) => {
    const newTrip = {
      ...newTripData,
      id: tripsList.length + 1,
    };

    setTripsList([...tripsList, newTrip]);
  };

  return (
    <div className="home-bg">
      <div className="container py-4">
        <h1 className="mb-4 text-center home_title">I tuoi viaggi</h1>

        {/* logica del map  */}
        <section className="d-flex flex-column align-items-center gap-3">
          {tripsList.map((trip) => (
            <div className="w-100" style={{ maxWidth: "600px" }} key={trip.id}>
              <TravelCard trip={trip} />
            </div>
          ))}
        </section>
        <div className="d-flex justify-content-center">
          <TravelForm onAdd={addTrip} />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
