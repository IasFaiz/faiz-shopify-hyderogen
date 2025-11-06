import {useParams, Link} from 'react-router';
import {useState} from 'react';
import dummyData from '../assets/DummyData';
import {useCart} from '~/lib/cart-context';

export default function ProductDetails() {
  const {productId} = useParams();
  const {addToCart} = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [customSize, setCustomSize] = useState({width: '', length: ''});
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedShape, setSelectedShape] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isCustomSize, setIsCustomSize] = useState(false);

  // Find product by ID
  const product = dummyData.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-4">The product you are looking for does not exist.</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Return to Homepage
        </Link>
      </div>
    );
  }

  // Create an array of images (repeat the same image if only one exists)
  const images = Array(5).fill(product.image);

  // Handle size selection
  const handleSizeSelect = (size: string) => {
    if (size === 'Custom') {
      setIsCustomSize(true);
      setSelectedSize('');
    } else {
      setIsCustomSize(false);
      setSelectedSize(size);
    }
  };

  // Handle custom size change
  const handleCustomSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setCustomSize((prev) => ({...prev, [name]: value}));
  };

  // Handle quantity change
  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Check if all required options are selected
  const isAddToCartEnabled = () => {
    if (isCustomSize && (!customSize.width || !customSize.length)) {
      return false;
    }
    return (
      selectedSize || (isCustomSize && customSize.width && customSize.length)
    );
  };

  // Handle add to cart
  const handleAddToCart = () => {
    const cartItem = {
      name: product.name,
      image: product.image,
      price: product.price,
      size: isCustomSize ? 'Custom' : selectedSize,
      color: selectedColor || product.color,
      shape: selectedShape,
      quantity,
      collection: product.collection,
      customSize:
        isCustomSize && customSize.width && customSize.length
          ? {
              width: customSize.width,
              length: customSize.length,
            }
          : undefined,
    };

    addToCart(cartItem);

    // Navigate to cart page
    window.location.href = '/cart';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link to="/" className="text-blue-600 hover:underline">
              Rugs
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link to="/" className="text-blue-600 hover:underline">
              {product.collection}
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-700">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="mb-4 rounded-lg overflow-hidden product-details-image-gallery">
            <img
              src={images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Sub Images */}
          <div className="grid grid-cols-5 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`rounded overflow-hidden border-2 product-details-thumbnail ${
                  selectedImageIndex === index ? 'active' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Section - Product Information */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">Collection: {product.collection}</p>

          {/* Characteristics */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Characteristics</h2>
            <div className="product-details-characteristics">
              {product.characteristics.map((char, index) => (
                <span
                  key={index}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Size</h2>
            <div className="product-details-size-options">
              {['2x3', '3x5', '4x6', '5x8', '6x9', '8x10', 'Custom'].map(
                (size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`product-details-size-option ${
                      size === selectedSize ||
                      (size === 'Custom' && isCustomSize)
                        ? 'selected'
                        : ''
                    }`}
                  >
                    {size}
                  </button>
                ),
              )}
            </div>

            {/* Custom Size Inputs */}
            {isCustomSize && (
              <div className="product-details-custom-size">
                <div>
                  <label
                    htmlFor="width"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Width (ft)
                  </label>
                  <input
                    type="number"
                    id="width"
                    name="width"
                    value={customSize.width}
                    onChange={handleCustomSizeChange}
                    min="1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="length"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Length (ft)
                  </label>
                  <input
                    type="number"
                    id="length"
                    name="length"
                    value={customSize.length}
                    onChange={handleCustomSizeChange}
                    min="1"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Color</h2>
            <div className="product-details-color-options">
              {[product.color].map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`product-details-color-option ${
                    selectedColor === color
                      ? 'selected'
                      : ''
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Shape Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Shape</h2>
            <div className="product-details-shape-options">
              {['Square or Rectangle', 'Circle or Oval'].map((shape) => (
                <label key={shape} className="product-details-shape-option">
                  <input
                    type="radio"
                    name="shape"
                    value={shape}
                    checked={selectedShape === shape}
                    onChange={() => setSelectedShape(shape)}
                    className="mr-2"
                  />
                  {shape}
                </label>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Quantity</h2>
            <div className="product-details-quantity">
              <button
                onClick={() => handleQuantityChange('decrease')}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange('increase')}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!isAddToCartEnabled()}
            className={`product-details-add-to-cart ${
              isAddToCartEnabled()
                ? ''
                : ''
            }`}
          >
            {product.customisable ? 'Get Quote' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
