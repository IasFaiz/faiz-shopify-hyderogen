import {HomeBanner} from '~/components/HomeBanner';

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <HomeBanner />
      </div>
    </div>
  );
}
