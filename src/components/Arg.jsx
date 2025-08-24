function Id({ name, position, number }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Position: {position}</p>
      <p>Number: {number}</p>
    </div>
  );
}

function Player() {
  return (
    <div>
      <Id name="Leo Messi" position="Right Winger" number="10" />
      <Id name="Di Maria" position="Left Winger" number="11" />
      <Id name="Alvarez" position="Striker" number="9" />
    </div>
  );
}

export default Player;
