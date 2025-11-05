import {HeroSection} from '~/components/HeroSection';
import {StyleCategories} from '~/components/StyleCategories';
import {FeaturedProjects} from '~/components/FeaturedProjects';
import {InspirationSection} from '~/components/InspirationSection';
import {ContactSection} from '~/components/ContactSection';

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <StyleCategories />
        <FeaturedProjects />
        <InspirationSection />
        <ContactSection />
      </div>
    </div>
  );
}
