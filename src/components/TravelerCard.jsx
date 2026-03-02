import { useState } from "react";

function TravelerCard({ participantProp }) {
  const [open, setOpen] = useState(false);
  const { firstName, lastName, phoneNumber, email, taxCode, emergencyContact } = participantProp;

  return (
    <div className="card mb-2 traveler-card">
      <button
        type="button"
        className="btn btn-link text-start w-100 card-header fw-semibold text-decoration-none traveler-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        {firstName} {lastName}
        <span className="chev" aria-hidden="true">▾</span>
      </button>

      <div className={`collapse ${open ? "show" : ""}`}>
        <div className="card-body ">
          <p className="mb-1">
            <strong>Telefono:</strong> {phoneNumber}
          </p>
          <p className="mb-1">
            <strong>Email:</strong> {email}
          </p>
          <p className="mb-1">
            <strong>Codice Fiscale:</strong> {taxCode}
          </p>
          <p className="mb-0">
            <strong>Numero di emergenza:</strong> {emergencyContact}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TravelerCard;
