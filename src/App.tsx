import { Navbar } from './presentation/components/Navbar'
import { Footer } from './presentation/components/Footer'
import { WhatsAppButton } from './presentation/components/WhatsAppButton'
import { HomePage } from './presentation/pages/HomePage'

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <HomePage />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
