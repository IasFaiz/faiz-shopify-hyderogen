import React, {useState, useEffect} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';
import {Link} from 'react-router';
import {Image} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import type {ProductVariantFragment} from 'storefrontapi.generated';
import {RUGS_SECTION_PRODUCT_FRAGMENT} from '~/lib/fragments';
import './RugsSection.css';

// Define a type for our custom product fragment
type RugsSectionProductFragment = typeof RUGS_SECTION_PRODUCT_FRAGMENT extends (
  ...args: any[]
) => infer T
  ? T
  : any;

interface FilterState {
  [key: string]: boolean;
}

interface SelectedFilters {
  availability: boolean;
  color: string[];
  size: string[];
  material: string[];
  price: string[];
  style: string[];
  pileHeight: string[];
  collection: string[];
  characteristics: string[];
}

export function RugsSection({
  products,
}: {
  products: RugsSectionProductFragment[];
}) {
  // State for filters enabled/disabled
  const [filtersEnabled, setFiltersEnabled] = useState<boolean>(false);

  // State for filter sections open/close
  const [openFilters, setOpenFilters] = useState<FilterState>({
    availability: true,
    color: false,
    size: false,
    material: false,
    price: false,
    style: false,
    pileHeight: false,
    collection: false,
    characteristics: false,
  });

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    availability: false,
    color: [],
    size: [],
    material: [],
    price: [],
    style: [],
    pileHeight: [],
    collection: [],
    characteristics: [],
  });

  // Extract unique values from products
  const [filterOptions, setFilterOptions] = useState({
    colors: [] as string[],
    sizes: [] as string[],
    materials: [] as string[],
    prices: [] as string[],
    styles: [] as string[],
    pileHeights: [] as string[],
    collections: [] as string[],
    characteristics: [] as string[],
  });

  useEffect(() => {
    // Extract unique values
    const colors = [
      ...new Set(products.map((product) => product.vendor || 'Unknown')),
    ];
    const sizes = [
      ...new Set(
        products.map((product) => product.title?.match(/\d+x\d+/)?.[0] || ''),
      ),
    ];
    const materials = [
      ...new Set(products.map((product) => product.productType || 'Unknown')),
    ];
    const styles = [
      ...new Set(
        products.map(
          (product) =>
            product.tags
              ?.find((tag: string) => tag.includes('style:'))
              ?.replace('style:', '') || '',
        ),
      ),
    ];
    const collections = [
      ...new Set(
        products.map(
          (product) => product.collections?.nodes[0]?.title || 'Unknown',
        ),
      ),
    ];

    // Extract characteristics from tags
    const allCharacteristics = products.flatMap(
      (product) =>
        product.tags?.filter((tag: string) => !tag.includes('style:')) || [],
    );
    const characteristics = [...new Set(allCharacteristics)];

    // Define price ranges
    const prices = [
      'Under 600000',
      '600000 - 800000',
      '800000 - 1000000',
      'Over 1000000',
    ];

    setFilterOptions({
      colors,
      sizes,
      materials,
      prices,
      styles,
      pileHeights: [], // Not available in Shopify product data
      collections,
      characteristics,
    });
  }, [products]);

  // Toggle filter section
  const toggleFilter = (filterName: string) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  // Handle filter selection
  const handleFilterChange = (
    filterType: keyof SelectedFilters,
    value: string,
  ) => {
    // If filters are disabled and user is applying a filter, enable filters
    if (!filtersEnabled) {
      setFiltersEnabled(true);
    }

    if (filterType === 'availability') {
      setSelectedFilters((prev) => ({
        ...prev,
        availability: !prev.availability,
      }));
    } else {
      setSelectedFilters((prev) => {
        const currentValues = prev[filterType] as string[];
        if (currentValues.includes(value)) {
          return {
            ...prev,
            [filterType]: currentValues.filter((v) => v !== value),
          };
        } else {
          return {
            ...prev,
            [filterType]: [...currentValues, value],
          };
        }
      });
    }
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Availability filter - check if product has available variants
    if (selectedFilters.availability) {
      const hasAvailableVariant = product.variants?.nodes?.some(
        (variant: ProductVariantFragment) => variant.availableForSale,
      );
      if (!hasAvailableVariant) return false;
    }

    // Color filter (using vendor as color for now)
    if (
      selectedFilters.color.length > 0 &&
      product.vendor &&
      !selectedFilters.color.includes(product.vendor)
    ) {
      return false;
    }

    // Size filter (extract from title)
    const size = product.title?.match(/\d+x\d+/)?.[0] || '';
    if (
      selectedFilters.size.length > 0 &&
      size &&
      !selectedFilters.size.includes(size)
    ) {
      return false;
    }

    // Material filter (using productType)
    if (
      selectedFilters.material.length > 0 &&
      product.productType &&
      !selectedFilters.material.includes(product.productType)
    ) {
      return false;
    }

    // Price filter
    if (selectedFilters.price.length > 0) {
      const price = Number(product.priceRange.minVariantPrice.amount);
      const priceMatch = selectedFilters.price.some((range) => {
        if (range === 'Under 600000') return price < 600000;
        if (range === '600000 - 800000')
          return price >= 600000 && price < 800000;
        if (range === '800000 - 1000000')
          return price >= 800000 && price < 1000000;
        if (range === 'Over 1000000') return price >= 1000000;
        return false;
      });
      if (!priceMatch) return false;
    }

    // Style filter (extract from tags)
    const style =
      product.tags
        ?.find((tag: string) => tag.includes('style:'))
        ?.replace('style:', '') || '';
    if (
      selectedFilters.style.length > 0 &&
      style &&
      !selectedFilters.style.includes(style)
    ) {
      return false;
    }

    // Collection filter
    const collection = product.collections?.nodes[0]?.title || '';
    if (
      selectedFilters.collection.length > 0 &&
      collection &&
      !selectedFilters.collection.includes(collection)
    ) {
      return false;
    }

    // Characteristics filter (using tags)
    if (selectedFilters.characteristics.length > 0) {
      const hasCharacteristic = selectedFilters.characteristics.some((char) =>
        product.tags?.includes(char),
      );
      if (!hasCharacteristic) return false;
    }

    return true;
  });

  // Toggle filters on/off
  const toggleFiltersEnabled = () => {
    const newState = !filtersEnabled;
    setFiltersEnabled(newState);

    if (!newState) {
      // If turning off filters, reset all filters and close accordions
      setSelectedFilters({
        availability: false,
        color: [],
        size: [],
        material: [],
        price: [],
        style: [],
        pileHeight: [],
        collection: [],
        characteristics: [],
      });

      // Close all filter accordions
      setOpenFilters({
        availability: false,
        color: false,
        size: false,
        material: false,
        price: false,
        style: false,
        pileHeight: false,
        collection: false,
        characteristics: false,
      });
    }
  };

  // Render filter section
  const renderFilterSection = (
    title: string,
    filterName: string,
    options: string[],
  ) => (
    <div className="filter-section mb-4">
      <div
        className="filter-header flex justify-between items-center py-2 cursor-pointer"
        onClick={() => toggleFilter(filterName)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFilter(filterName);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <h3 className="font-medium text-gray-700">{title}</h3>
        {openFilters[filterName] ? (
          <ChevronUp size={16} className="text-gray-500" />
        ) : (
          <ChevronDown size={16} className="text-gray-500" />
        )}
      </div>

      {openFilters[filterName] && (
        <div className="filter-options mt-2 space-y-2">
          {options.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                id={`${filterName}-${option}`}
                checked={
                  filterName === 'availability'
                    ? selectedFilters.availability
                    : (
                        selectedFilters[
                          filterName as keyof SelectedFilters
                        ] as string[]
                      ).includes(option)
                }
                onChange={() =>
                  handleFilterChange(
                    filterName as keyof SelectedFilters,
                    option,
                  )
                }
                className="mr-2 h-4 w-4 text-blue-600 rounded"
              />
              <label
                htmlFor={`${filterName}-${option}`}
                className="text-sm text-gray-600 cursor-pointer"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="rugs-section-container">
      {/* Filter Toggle Button - always visible at the top */}
      <div className="filter-toggle-container">
        <h2 className="filter-toggle-label">Filters</h2>
        <div className="filter-toggle">
          <label className="switch" aria-label="Toggle filters">
            <input
              type="checkbox"
              checked={filtersEnabled}
              onChange={toggleFiltersEnabled}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className={`rugs-section ${filtersEnabled ? '' : 'filters-hidden'}`}>
        {/* Left Filter Section - only visible when filters are enabled */}
        {filtersEnabled && (
          <div className="filters">
            {renderFilterSection('Availability', 'availability', ['In Stock'])}
            {renderFilterSection('Color', 'color', filterOptions.colors)}
            {renderFilterSection('Size', 'size', filterOptions.sizes)}
            {renderFilterSection(
              'Material',
              'material',
              filterOptions.materials,
            )}
            {renderFilterSection('Price', 'price', filterOptions.prices)}
            {renderFilterSection('Style', 'style', filterOptions.styles)}
            {renderFilterSection(
              'Pile Height',
              'pileHeight',
              filterOptions.pileHeights,
            )}
            {renderFilterSection(
              'Collection',
              'collection',
              filterOptions.collections,
            )}
            {renderFilterSection(
              'Characteristics',
              'characteristics',
              filterOptions.characteristics,
            )}
          </div>
        )}

        {/* Right Product Section */}
        <div className="products-container">
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <p className="text-gray-500">
                No products match your selected filters.
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => {
              const image = product.featuredImage;

              return (
                <Link
                  key={product.id}
                  to={`/products/${product.handle}`}
                  className="product-card-link"
                  prefetch="intent"
                >
                  <div className="product-card">
                    <div className="product-image-container">
                      {image && (
                        <Image
                          alt={image.altText || product.title}
                          aspectRatio="1/1"
                          data={image}
                          sizes="(min-width: 45em) 400px, 100vw"
                        />
                      )}
                      {product.tags?.includes('customisable') && (
                        <div className="customisable-badge">Customisable</div>
                      )}
                    </div>
                    <div className="product-name">{product.title}</div>
                    <div className="product-price">
                      {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency:
                          product.priceRange.minVariantPrice.currencyCode,
                      }).format(
                        Number(product.priceRange.minVariantPrice.amount),
                      )}
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
