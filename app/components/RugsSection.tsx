import React, {useState, useEffect} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';
import dummyData from '../assets/DummyData';
import './RugsSection.css';

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

const RugsSection = () => {
  // State for filters enabled/disabled
  const [filtersEnabled, setFiltersEnabled] = useState<boolean>(true);

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

  // Extract unique values from dummyData
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
    const colors = [...new Set(dummyData.map((rug) => rug.color))];
    const sizes = [...new Set(dummyData.map((rug) => rug.size))];
    const materials = [...new Set(dummyData.map((rug) => rug.material))];
    const styles = [...new Set(dummyData.map((rug) => rug.style))];
    const pileHeights = [...new Set(dummyData.map((rug) => rug.pileHeight))];
    const collections = [...new Set(dummyData.map((rug) => rug.collection))];

    // Extract characteristics
    const allCharacteristics = dummyData.flatMap((rug) => rug.characteristics);
    const characteristics = [...new Set(allCharacteristics)];

    // Define price ranges
    const prices = [
      'Under $1000',
      '$1000 - $2000',
      '$2000 - $3000',
      'Over $3000',
    ];

    setFilterOptions({
      colors,
      sizes,
      materials,
      prices,
      styles,
      pileHeights,
      collections,
      characteristics,
    });
  }, []);

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

  // Filter rugs based on selected filters
  const filteredRugs = dummyData.filter((rug) => {
    // Availability filter
    if (selectedFilters.availability && !rug.availability) {
      return false;
    }

    // Color filter
    if (
      selectedFilters.color.length > 0 &&
      !selectedFilters.color.includes(rug.color)
    ) {
      return false;
    }

    // Size filter
    if (
      selectedFilters.size.length > 0 &&
      !selectedFilters.size.includes(rug.size)
    ) {
      return false;
    }

    // Material filter
    if (
      selectedFilters.material.length > 0 &&
      !selectedFilters.material.includes(rug.material)
    ) {
      return false;
    }

    // Price filter
    if (selectedFilters.price.length > 0) {
      const price = rug.price;
      const priceMatch = selectedFilters.price.some((range) => {
        if (range === 'Under $1000') return price < 1000;
        if (range === '$1000 - $2000') return price >= 1000 && price < 2000;
        if (range === '$2000 - $3000') return price >= 2000 && price < 3000;
        if (range === 'Over $3000') return price >= 3000;
        return false;
      });
      if (!priceMatch) return false;
    }

    // Style filter
    if (
      selectedFilters.style.length > 0 &&
      !selectedFilters.style.includes(rug.style)
    ) {
      return false;
    }

    // Pile Height filter
    if (
      selectedFilters.pileHeight.length > 0 &&
      !selectedFilters.pileHeight.includes(rug.pileHeight)
    ) {
      return false;
    }

    // Collection filter
    if (
      selectedFilters.collection.length > 0 &&
      !selectedFilters.collection.includes(rug.collection)
    ) {
      return false;
    }

    // Characteristics filter
    if (selectedFilters.characteristics.length > 0) {
      const hasCharacteristic = selectedFilters.characteristics.some((char) =>
        rug.characteristics.includes(char),
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
    <div className="rugs-section">
      {/* Left Filter Section */}
      <div className="filters">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Filters</h2>
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
        {renderFilterSection('Color', 'color', filterOptions.colors)}
        {renderFilterSection('Size', 'size', filterOptions.sizes)}
        {renderFilterSection('Material', 'material', filterOptions.materials)}
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

      {/* Right Product Section */}
      <div className="products-container">
        {filteredRugs.length === 0 ? (
          <div className="no-products">
            <p className="text-gray-500">
              No rugs match your selected filters.
            </p>
          </div>
        ) : (
          filteredRugs.map((rug) => (
            <div key={rug.id} className="product-card">
              <div className="product-image-container">
                <img src={rug.image} alt={rug.name} />
              </div>
              <div className="product-content">
                <h4>{rug.name}</h4>
                <p>{rug.description}</p>
                {!rug.availability && (
                  <span className="text-red-500 text-sm">Out of Stock</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RugsSection;
