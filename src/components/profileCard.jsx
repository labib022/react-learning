// ProfileCard.jsx
function ProfileCard(props) {
  return (
    <div
      style={{
        border: '2px solid #f1f1',
        borderRadius: '12px',
        padding: '16px',
        width: '250px',
        margin: '10px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9ff',
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{ width: '80px', borderRadius: '50%' }}
      />
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <p>From: {props.city}</p>
    </div>
  );
}

export default ProfileCard;
