import Footer from './components/footer';
// import Hero from './components/hero';
import Home from './components/home/home';
import Navbar from './components/footer';
import ProfileCard from './components/profileCard';
import Student from './components/student';

function App() {
  return (
    <div>
      <Home />
      {/* <Hero /> */}
      <Navbar />
      <Footer />
      <ProfileCard />
      <Student />
    </div>
  );
}

export default App;
