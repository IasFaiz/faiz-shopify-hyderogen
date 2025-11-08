import {HomeBanner} from '~/components/HomeBanner';
import {RugsSection} from '~/components/RugsSection';
import {RUGS_SECTION_PRODUCT_FRAGMENT} from '~/lib/fragments';
import {useLoaderData} from 'react-router';
import type {Route} from './+types/home';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader(args: Route.LoaderArgs) {
  const [{products}] = await Promise.all([
    args.context.storefront.query(RUGS_SECTION_PRODUCTS_QUERY),
  ]);

  return {
    products: products.nodes,
  };
}

const RUGS_SECTION_PRODUCTS_QUERY = `#graphql
  query RugsSectionProducts($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 20) {
      nodes {
        ...RugsSectionProduct
      }
    }
  }
  ${RUGS_SECTION_PRODUCT_FRAGMENT}
` as const;

export default function Homepage() {
  const {products} = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <HomeBanner />
        <RugsSection products={products || []} />
      </div>
    </div>
  );
}
