import React, {useState, useEffect} from 'react';
import {Plus, Minus, ArrowUpDown} from 'lucide-react';
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
  style: string[];
  color: string[];
  size: string[];
  material: string[];
  construction: string[];
  collection: string[];
  price: string[];
}

type SortOption =
  | 'default'
  | 'price-low-high'
  | 'price-high-low'
  | 'title-asc'
  | 'title-desc';

export function RugsSection({
  products,
}: {
  products: RugsSectionProductFragment[];
}) {
  // State for filters enabled/disabled
  const [filtersEnabled, setFiltersEnabled] = useState<boolean>(false);

  // State for sorting
  const [sortOption, setSortOption] = useState<SortOption>('default');

  // State for filter sections open/close
  const [openFilters, setOpenFilters] = useState<FilterState>({
    availability: true,
    style: false,
    color: false,
    size: false,
    material: false,
    construction: false,
    collection: false,
    price: false,
  });

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    availability: false,
    style: [],
    color: [],
    size: [],
    material: [],
    construction: [],
    collection: [],
    price: [],
  });

  // Extract unique values from products
  const [filterOptions, setFilterOptions] = useState({
    styles: [] as string[],
    colors: [] as string[],
    sizes: [] as string[],
    materials: [] as string[],
    constructions: [] as string[],
    collections: [] as string[],
    prices: [] as string[],
  });

  useEffect(() => {
    // Extract unique values for each filter category

    // Style filter
    const styles = [
      'Contemporary',
      'Traditional',
      'Transitional',
      'Performance',
      'Outdoor',
    ];

    // Color filter
    const colors = [
      'Beige',
      'Tan / Brown',
      'Gray',
      'Ivory / White',
      'Gold/Yellow',
      'Teal',
      'Blue',
      'Green',
      'Rust',
      'Multicolor',
      'Red',
      'Pink',
      'Purple',
      'Orange',
      'Black',
    ];

    // Size filter
    const sizes = [
      '2X3',
      '3X5',
      '4X6',
      '5X8',
      '6X9',
      '8X10',
      '9X12',
      '10X14',
      '12X15',
      'Oversized',
      'Runner',
      'Round',
      'Irregular',
    ];

    // Material filter
    const materials = [
      '100% Wool',
      'Silk',
      'Botanical Silk',
      'Wool & Silk',
      'Wool & Botanical Silk',
      'Cotton',
      'Linen',
      'Jute & Sisal',
      'PET Yarn',
      'Polypropylene',
      'Nylon',
    ];

    // Construction filter
    const constructions = ['Hand Knotted', 'Hand Tufted', 'Handwoven'];

    // Collection filter
    const collections = [
      'Bamiyan',
      'Bidjar',
      'Prism',
      'Classic Revivals',
      'Impressions',
      'Inked',
      'Khyber',
      'Luxor',
    ];

    // Price filter
    const prices = [
      '0-1,00,000',
      '1,00,000-3,00,000',
      '3,00,000-6,00,000',
      'Above 6,00,000',
    ];

    setFilterOptions({
      styles,
      colors,
      sizes,
      materials,
      constructions,
      collections,
      prices,
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

    // Style filter - check if product has the selected style in tags, title, or vendor
    if (selectedFilters.style.length > 0) {
      // Check in tags with various formats
      const styleTag = product.tags?.find((tag: string) =>
        tag.toLowerCase().includes('style:'),
      );
      const styleFromTag = styleTag ? styleTag.split(':')[1]?.trim() : '';

      // Check in product title
      const hasStyleInTitle = selectedFilters.style.some((style) =>
        product.title.toLowerCase().includes(style.toLowerCase()),
      );

      // Check in product tags (without specific format)
      const hasStyleInTags = selectedFilters.style.some((style) =>
        product.tags?.some((tag: string) =>
          tag.toLowerCase().includes(style.toLowerCase()),
        ),
      );

      // Check in vendor
      const hasStyleInVendor = selectedFilters.style.includes(
        product.vendor || '',
      );

      if (
        !styleFromTag &&
        !hasStyleInTitle &&
        !hasStyleInTags &&
        !hasStyleInVendor
      ) {
        return false;
      }
    }

    // Color filter - check if product has the selected color in tags, title, or vendor
    if (selectedFilters.color.length > 0) {
      // Check in tags with various formats
      const colorTag = product.tags?.find(
        (tag: string) =>
          tag.toLowerCase().includes('color:') ||
          tag.toLowerCase().includes('colour:'),
      );
      const colorFromTag = colorTag ? colorTag.split(':')[1]?.trim() : '';

      // Check in product title
      const hasColorInTitle = selectedFilters.color.some((color) => {
        // Handle special color names with slashes
        const colorVariations = color
          .toLowerCase()
          .split('/')
          .map((c) => c.trim());
        return colorVariations.some((variation) =>
          product.title.toLowerCase().includes(variation),
        );
      });

      // Check in product tags (without specific format)
      const hasColorInTags = selectedFilters.color.some((color) => {
        const colorVariations = color
          .toLowerCase()
          .split('/')
          .map((c) => c.trim());
        return product.tags?.some((tag: string) =>
          colorVariations.some((variation) =>
            tag.toLowerCase().includes(variation),
          ),
        );
      });

      // Check in vendor
      const hasColorInVendor = selectedFilters.color.includes(
        product.vendor || '',
      );

      if (
        !selectedFilters.color.includes(colorFromTag) &&
        !hasColorInTitle &&
        !hasColorInTags &&
        !hasColorInVendor
      ) {
        return false;
      }
    }

    // Size filter - check if product has the selected size in variants, title, or tags
    if (selectedFilters.size.length > 0) {
      // Check in variants
      const variantSizes =
        product.variants?.nodes.map(
          (variant: ProductVariantFragment) =>
            variant.title.match(/\d+x\d+/)?.[0] || '',
        ) || [];

      // Check in product title
      const titleSize = product.title?.match(/\d+x\d+/)?.[0] || '';

      // Check in tags
      const sizeTag = product.tags?.find((tag: string) =>
        tag.toLowerCase().includes('size:'),
      );
      const sizeFromTag = sizeTag ? sizeTag.split(':')[1]?.trim() : '';

      // Check for special sizes like "Oversized", "Runner", "Round", "Irregular"
      const hasSpecialSize = selectedFilters.size.some((size) => {
        if (['Oversized', 'Runner', 'Round', 'Irregular'].includes(size)) {
          return (
            product.title.toLowerCase().includes(size.toLowerCase()) ||
            product.tags?.some((tag: string) =>
              tag.toLowerCase().includes(size.toLowerCase()),
            )
          );
        }
        return false;
      });

      const allSizes = [...variantSizes, titleSize, sizeFromTag].filter(
        Boolean,
      );

      if (
        !hasSpecialSize &&
        allSizes.length > 0 &&
        !selectedFilters.size.some((size) => allSizes.includes(size))
      ) {
        return false;
      }
    }

    // Material filter - check if product has the selected material in tags, product type, or title
    if (selectedFilters.material.length > 0) {
      // Check in tags with various formats
      const materialTag = product.tags?.find((tag: string) =>
        tag.toLowerCase().includes('material:'),
      );
      const materialFromTag = materialTag
        ? materialTag.split(':')[1]?.trim()
        : '';

      // Check in product type
      const materialFromType = product.productType || '';

      // Check in product title
      const hasMaterialInTitle = selectedFilters.material.some((mat) => {
        // Handle special material names with symbols
        const materialVariations = mat
          .toLowerCase()
          .replace(/&/g, 'and')
          .replace(/%/g, 'percent')
          .split(/[\s&]+/)
          .filter(Boolean);

        return materialVariations.some((variation) =>
          product.title.toLowerCase().includes(variation),
        );
      });

      // Check in product tags (without specific format)
      const hasMaterialInTags = selectedFilters.material.some((mat) => {
        const materialVariations = mat
          .toLowerCase()
          .replace(/&/g, 'and')
          .replace(/%/g, 'percent')
          .split(/[\s&]+/)
          .filter(Boolean);

        return product.tags?.some((tag: string) =>
          materialVariations.some((variation) =>
            tag.toLowerCase().includes(variation),
          ),
        );
      });

      if (
        !selectedFilters.material.includes(materialFromTag) &&
        !selectedFilters.material.includes(materialFromType) &&
        !hasMaterialInTitle &&
        !hasMaterialInTags
      ) {
        return false;
      }
    }

    // Construction filter - check if product has the selected construction in tags or title
    if (selectedFilters.construction.length > 0) {
      // Check in tags with various formats
      const constructionTag = product.tags?.find((tag: string) =>
        tag.toLowerCase().includes('construction:'),
      );
      const constructionFromTag = constructionTag
        ? constructionTag.split(':')[1]?.trim()
        : '';

      // Check in product title
      const hasConstructionInTitle = selectedFilters.construction.some(
        (construction) => {
          const constructionVariations = construction
            .toLowerCase()
            .split(/[\s]+/);
          return constructionVariations.some((variation) =>
            product.title.toLowerCase().includes(variation),
          );
        },
      );

      // Check in product tags (without specific format)
      const hasConstructionInTags = selectedFilters.construction.some(
        (construction) => {
          const constructionVariations = construction
            .toLowerCase()
            .split(/[\s]+/);
          return product.tags?.some((tag: string) =>
            constructionVariations.some((variation) =>
              tag.toLowerCase().includes(variation),
            ),
          );
        },
      );

      if (
        !selectedFilters.construction.includes(constructionFromTag) &&
        !hasConstructionInTitle &&
        !hasConstructionInTags
      ) {
        return false;
      }
    }

    // Collection filter - check if product belongs to the selected collection
    if (selectedFilters.collection.length > 0) {
      const collection = product.collections?.nodes[0]?.title || '';

      // Also check if collection name is in product title or tags
      const hasCollectionInTitle = selectedFilters.collection.some((coll) =>
        product.title.toLowerCase().includes(coll.toLowerCase()),
      );

      const hasCollectionInTags = selectedFilters.collection.some((coll) =>
        product.tags?.some((tag: string) =>
          tag.toLowerCase().includes(coll.toLowerCase()),
        ),
      );

      if (
        !selectedFilters.collection.includes(collection) &&
        !hasCollectionInTitle &&
        !hasCollectionInTags
      ) {
        return false;
      }
    }

    // Price filter
    if (selectedFilters.price.length > 0) {
      const price = Number(product.priceRange.minVariantPrice.amount);
      const priceMatch = selectedFilters.price.some((range) => {
        if (range === '0-1,00,000') return price < 100000;
        if (range === '1,00,000-3,00,000')
          return price >= 100000 && price < 300000;
        if (range === '3,00,000-6,00,000')
          return price >= 300000 && price < 600000;
        if (range === 'Above 6,00,000') return price >= 600000;
        return false;
      });
      if (!priceMatch) return false;
    }

    return true;
  });

  // Apply sorting to filtered products
  const sortedProducts = [...filteredProducts];
  if (sortOption !== 'default') {
    sortedProducts.sort((a, b) => {
      const priceA = Number(a.priceRange.minVariantPrice.amount);
      const priceB = Number(b.priceRange.minVariantPrice.amount);
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      const collectionA = a.collections?.nodes[0]?.title?.toLowerCase() || '';
      const collectionB = b.collections?.nodes[0]?.title?.toLowerCase() || '';

      switch (sortOption) {
        case 'price-low-high':
          return priceA - priceB;
        case 'price-high-low':
          return priceB - priceA;
        case 'title-asc':
          return titleA.localeCompare(titleB);
        case 'title-desc':
          return titleB.localeCompare(titleA);
        default:
          return 0;
      }
    });
  }

  // Toggle filters on/off
  const toggleFiltersEnabled = () => {
    const newState = !filtersEnabled;
    setFiltersEnabled(newState);

    if (!newState) {
      // If turning off filters, reset all filters and close accordions
      setSelectedFilters({
        availability: false,
        style: [],
        color: [],
        size: [],
        material: [],
        construction: [],
        collection: [],
        price: [],
      });

      // Close all filter accordions
      setOpenFilters({
        availability: false,
        style: false,
        color: false,
        size: false,
        material: false,
        construction: false,
        collection: false,
        price: false,
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
          <Minus size={16} className="text-gray-500" />
        ) : (
          <Plus size={16} className="text-gray-500" />
        )}
      </div>

      {openFilters[filterName] && (
        <div className="filter-options">
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
    <div className="rugs-section-component">
      {/* Filter and Sort Controls */}
      <div className="filter-sort-container">
        {!filtersEnabled && (
          <div className="filter-header-with-toggle">
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
        )}

        {/* Sort Dropdown */}
      </div>

      <div className={`rugs-section ${filtersEnabled ? '' : 'filters-hidden'}`}>
        {/* Left Filter Section - only visible when filters are enabled */}
        {filtersEnabled && (
          <div className="filters">
            <div className="filter-header-with-toggle">
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
            {renderFilterSection('Availability', 'availability', ['In Stock'])}
            {renderFilterSection('Style', 'style', filterOptions.styles)}
            {renderFilterSection('Color', 'color', filterOptions.colors)}
            {renderFilterSection('Size (ft)', 'size', filterOptions.sizes)}
            {renderFilterSection(
              'Material',
              'material',
              filterOptions.materials,
            )}
            {renderFilterSection(
              'Construction',
              'construction',
              filterOptions.constructions,
            )}
            {renderFilterSection(
              'Collection',
              'collection',
              filterOptions.collections,
            )}
            {renderFilterSection('Price', 'price', filterOptions.prices)}
          </div>
        )}

        {/* Right Product Section */}
        <div>
          <div className="sort-container">
            <div className="sort-dropdown">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="sort-select"
              >
                <option value="default">Sort by</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="title-asc">Title: A to Z</option>
                <option value="title-desc">Title: Z to A</option>
              </select>
              <ArrowUpDown size={16} className="sort-icon" />
            </div>
          </div>
          <div className="products-container">
            {sortedProducts.length === 0 ? (
              <div className="no-products">
                <p className="text-gray-500">
                  No products match your selected filters.
                </p>
              </div>
            ) : (
              sortedProducts.map((product) => {
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
                        {product.tags?.some(
                          (tag: string) =>
                            tag.toLowerCase().includes('customisable') ||
                            tag.toLowerCase().includes('customizable'),
                        ) && (
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
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
