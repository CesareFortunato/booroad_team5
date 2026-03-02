import { useState } from "react";

function TravelForm({ onAdd }) {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(imageFile);

    onAdd({
      destination,
      startDate,
      endDate,
      image: imageFile,
      participants: [],
    });

    setDestination("");
    setStartDate("");
    setEndDate("");
    setImageFile(null);
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded bg-white shadow-sm w-100"
      style={{ maxWidth: "530px" }}
    >
      <h3 className="mb-3 title_form">Aggiungi nuovo viaggio</h3>

      <div className="mb-3">
        <label className="form-label">Destinazione</label>
        <input
          type="text"
          className="form-control"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Carica Immagine</label>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0].name)}
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Data Inizio</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Data Fine</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn  w-100 btn_subtmit">
        Salva Viaggio
      </button>
    </form>
  );
}

export default TravelForm;
