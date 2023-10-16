import Navbar from './components/Navbar'
import HeroSection  from './components/HeroSection'
import PendaftaranSection  from './components/PendaftaranSection'
import KegiatanSection from './components/KegiatanSection'
import HerbalSection from './components/HerbalSection'
import OurTeamSection from './components/OurTeamSection'
import Information from './components/Information'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className="bg-[#121212] overflow-hidden">
      <Navbar />
        {/* <div className="container mt-20 mx-auto px-12 py-4"> */}
          <HeroSection />
          <PendaftaranSection/>
          <KegiatanSection />
          <HerbalSection />
          <OurTeamSection />
          <Information />
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default Home;