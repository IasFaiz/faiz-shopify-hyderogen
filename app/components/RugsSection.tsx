import React, {useState} from 'react';
import dummyData from '../assets/DummyData';
import './RugsSection.css';

const RugsSection = () => {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Filter rugs based on availability
  const filteredRugs = showInStockOnly
    ? dummyData.filter((rug) => rug.availability)
    : dummyData;

  return (
    <div className="rugs-section">
      {/* Left Filter Section */}
      <div className="filters">
        <h3>Filters</h3>

        <div className="filter-option">
          <label>
            <input
              type="checkbox"
              checked={showInStockOnly}
              onChange={(e) => setShowInStockOnly(e.target.checked)}
            />
            In Stock
          </label>
        </div>
      </div>

      {/* Right Product Section */}
      <div className="products">
        {filteredRugs.map((rug) => (
          <div key={rug.id} className="product-card">
            <img src={rug.image} alt={rug.name} />
            <h4>{rug.name}</h4>
            <p>{rug.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RugsSection;
