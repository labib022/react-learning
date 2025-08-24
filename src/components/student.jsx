function Profile(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Group: {props.group}</p>
      <p>Roll: {props.roll}</p>
    </div>
  );
}

function Student() {
  return (
    <div>
      <Profile name="Labib" group="Science" roll="226" />
      <Profile name="Shawon" group="Arts" roll="45" />
    </div>
  );
}

export default Student;
