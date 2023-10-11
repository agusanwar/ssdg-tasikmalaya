import Navbar from './components/Navbar'
import HeroSection  from './components/HeroSection'
import PendaftaranSection  from './components/PendaftaranSection'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className="bg-[#121212] overflow-hidden">
      <Navbar />
        {/* <div className="container mt-20 mx-auto px-12 py-4"> */}
          <HeroSection />
          <PendaftaranSection/>
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default Home;