function Id({ name, position, number }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 m-3 w-64 text-center hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{position}</p>
      <p className="text-blue-500 font-semibold">#{number}</p>
    </div>
  );
}

function XI() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-100 min-h-screen">
      <Id name="Leo Messi" position="Right Winger" number="10" />
      <Id name="Di Maria" position="Left Winger" number="11" />
      <Id name="Alvarez" position="Striker" number="9" />
    </div>
  );
}

export default XI;
