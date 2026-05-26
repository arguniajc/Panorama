import { HeroSection } from '../sections/HeroSection'
import { AboutSection } from '../sections/AboutSection'
import { NewsSection } from '../sections/NewsSection'
import { EventsSection } from '../sections/EventsSection'
import { ProjectsSection } from '../sections/ProjectsSection'
import { CommunitySection } from '../sections/CommunitySection'
import { GallerySection } from '../sections/GallerySection'
import { MapSection } from '../sections/MapSection'
import { ContactSection } from '../sections/ContactSection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <EventsSection />
      <ProjectsSection />
      <CommunitySection />
      <GallerySection />
      <MapSection />
      <ContactSection />
    </main>
  )
}
