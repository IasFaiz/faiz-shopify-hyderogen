import {useParams, Link, useLoaderData, useNavigate} from 'react-router';
import {useState} from 'react';
import type {Route} from './+types/products.$productId';
import '~/styles/product-details.css';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import {ProductPrice} from '~/components/ProductPrice';
import {ProductImage} from '~/components/ProductImage';
import {ProductForm} from '~/components/ProductForm';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';

export const meta: Route.MetaFunction = ({data}) => {
  return [
    {title: `Hydrogen | ${data?.product.title ?? ''}`},
    {
      rel: 'canonical',
      href: `/products/${data?.product.handle}`,
    },
  ];
};

export async function loader(args: Route.LoaderArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({context, params, request}: Route.LoaderArgs) {
  const {productId} = params;
  const {storefront} = context;

  if (!productId) {
    throw new Error('Expected product handle to be defined');
  }

  // The productId is actually the product handle in Shopify
  const handle = productId;

  const [{product}] = await Promise.all([
    storefront.query(PRODUCT_QUERY, {
      variables: {handle, selectedOptions: getSelectedProductOptions(request)},
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  return {
    product,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context, params}: Route.LoaderArgs) {
  // Put any API calls that is not critical to be available on first page render
  // For example: product reviews, product recommendations, social feeds.

  return {};
}

export default function ProductDetails() {
  const {product} = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const {open} = useAside();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [customSize, setCustomSize] = useState({width: '', length: ''});
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedShape, setSelectedShape] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isCustomSize, setIsCustomSize] = useState(false);

  // Optimistically selects a variant with given available variant information
  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  // Sets the search param to the selected variant without navigation
  // only when no search params are set in the url
  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);

  // Get the product options array
  const productOptions = getProductOptions({
    ...product,
    selectedOrFirstAvailableVariant: selectedVariant,
  });

  const {title, descriptionHtml} = product;

  // Get the featured image
  const featuredImage = selectedVariant?.image;

  // Create an array of images (repeat the same image if only one exists)
  const images = featuredImage ? Array(5).fill(featuredImage.url) : [];

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
      (selectedSize ||
        (isCustomSize && customSize.width && customSize.length)) &&
      selectedShape
    );
  };

  // Handle add to cart
  const handleAddToCart = () => {
    // Redirect to cart page
    void navigate('/cart');
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
              {'Rugs'}
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-700">{title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="mb-4 rounded-lg overflow-hidden product-details-image-gallery">
            {featuredImage && (
              <img
                src={images[selectedImageIndex]}
                alt={title}
                className="w-full h-auto object-cover"
              />
            )}
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
                  alt={`${title} view ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Section - Product Information */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">Collection: Rugs</p>

          {/* Product Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <div dangerouslySetInnerHTML={{__html: descriptionHtml}} />
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
              {['Default'].map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`product-details-color-option ${
                    selectedColor === color ? 'selected' : ''
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
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange('increase')}>
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <AddToCartButton
            disabled={
              !selectedVariant ||
              !selectedVariant.availableForSale ||
              !isAddToCartEnabled()
            }
            onClick={handleAddToCart}
            lines={
              selectedVariant
                ? [
                    {
                      merchandiseId: selectedVariant.id,
                      quantity,
                      selectedVariant,
                    },
                  ]
                : []
            }
          >
            <div style={{width: '10rem', padding: '0.5rem'}}>
              {selectedVariant?.availableForSale ? 'Get Quote' : 'Sold Out'}
            </div>
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
` as const;
