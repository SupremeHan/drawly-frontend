import {
  BannerSection,
  ContactSection,
  DiscoverSection,
  Footer,
  HeroSection,
  Navbar,
} from './components';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <main className="w-full max-w-[1024px] mx-auto">
        <HeroSection />
        <BannerSection />

        <DiscoverSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
