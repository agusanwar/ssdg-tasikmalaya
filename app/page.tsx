import Navbar from './components/Navbar'
import HeroSection  from './components/HeroSection'
import PendaftaranSection  from './components/PendaftaranSection'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#121212] flex-col">
      <Navbar />
        <div className="container mt-20 mx-auto px-12 py-4">
          <HeroSection />
          <PendaftaranSection/>
      </div>
    </main>
  )
}
