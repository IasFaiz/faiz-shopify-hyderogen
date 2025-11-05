import {HomeBanner} from '~/components/HomeBanner';
import RugsSection from '~/components/RugsSection';

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <HomeBanner />
        <RugsSection />
      </div>
    </div>
  );
}
