import React from 'react';
import { useParams } from 'react-router-dom';

const PRODUCT_DETAILS: Record<
  string,
  { title: string; description: string }
> = {
  'animal-feed': {
    title: 'Animal Feed Collection',
    description:
      'High-quality Soya DOC carefully sourced for optimal nutrition and global export standards.',
  },
  spices: {
    title: 'Artisan Spices & Seasonings',
    description:
      'Premium turmeric, chilli powder, and heritage spice blends crafted by skilled artisans across India.',
  },
  'basmati-rice': {
    title: 'Basmati Rice Varieties',
    description:
      'Finest long-grain basmati and specialty rice varieties, grown using traditional Himalayan and Punjab farming methods.',
  },
  vegetables: {
    title: 'Garden Fresh Vegetables',
    description:
      'Certified fresh Nasik onions, G4 green chillies, tomatoes, and other export-grade vegetables straight from Indian organic farms.',
  },
  fruits: {
    title: 'Seasonal Fruits Collection',
    description:
      'From Alphonso mangoes to pomegranates and G9 bananas — our fruit offerings bring India’s sweetest harvest to global tables.',
  },
  'gourmet-processed-foods': {
    title: 'Gourmet Processed Foods',
    description:
      'Artisanal pickles, heritage chutneys, dried fruits, and ready-to-serve Indian delicacies for global markets.',
  },
};

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCT_DETAILS[productId || ''];

  if (!product) {
    return (
      <div className="min-h-screen bg-midnight-900 text-white flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-red-400">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight-900 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-6 text-champagne-400">
          {product.title}
        </h1>
        <p className="text-lg text-platinum-300 leading-relaxed">
          {product.description}
        </p>
        {/* 🔧 Add more details like images, specs, contact buttons here if needed */}
      </div>
    </div>
  );
};

export default ProductDetailPage;
