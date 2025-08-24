import Footer from './components/footer';
// import Hero from './components/hero';
import Home from './components/home/home';
import Navbar from './components/footer';
import ProfileCard from './components/profileCard';
import Student from './components/student';
import Arg from './components/Arg';
import XI from './components/Argentina';

function App() {
  return (
    <div>
      <Home />
      {/* <Hero /> */}
      <Navbar />
      <Footer />
      <ProfileCard />
      <Student />
      <Arg />
      <div>
        <h1 className="text-3xl font-bold text-center my-6 text-blue-700">
          Argentina XI
        </h1>
        <XI />
      </div>
    </div>
  );
}

export default App;
