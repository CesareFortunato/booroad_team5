function TravelerCard({ participantProp }) {
  const { firstName, lastName, email, taxCode } = participantProp;

  return (
    <div>
      <h4>
        {firstName} {lastName}
      </h4>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Codice Fiscale:</strong> {taxCode}
      </p>
    </div>
  );
}

export default TravelerCard;
