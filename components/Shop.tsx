'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Shield, 
  Truck, 
  ArrowRight, 
  Check,
  Play,
  Heart,
  ShoppingCart,
  Cpu,
  Battery,
  Monitor,
  Camera
} from 'lucide-react';

// Define types for our data structures
type ColorName = 'space-gray' | 'silver' | 'gold';

interface ColorOption {
  name: ColorName;
  value: string;
  label: string;
}

interface StorageOption {
  value: string;
  price: number;
  original: number;
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

interface Spec {
  label: string;
  value: string;
}

export default function MacBookSalePage() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<ColorName>('space-gray');
  const [selectedStorage, setSelectedStorage] = useState<string>('512gb');
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Real MacBook images from Apple
  const macbookImages: Record<ColorName, string[]> = {
    'space-gray': [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673202',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-gallery1-202301?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1671143571504',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-gallery2-202301?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1671143571367'
    ],
    'silver': [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673175',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-gallery1-202301?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1671143571504',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-gallery2-202301?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1671143571367'
    ],
    'gold': [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673175',
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-gallery1-202301?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1671143571504'
    ]
  };

  const colors: ColorOption[] = [
    { name: 'space-gray', value: '#424245', label: 'Space Gray' },
    { name: 'silver', value: '#E8E8ED', label: 'Silver' },
    { name: 'gold', value: '#FAD7BD', label: 'Gold' },
  ];

  const storageOptions: StorageOption[] = [
    { value: '512gb', price: 1999, original: 2199 },
    { value: '1tb', price: 2299, original: 2499 },
    { value: '2tb', price: 2699, original: 2899 },
  ];

  const features: Feature[] = [
    {
      icon: Cpu,
      title: 'M2 Pro Chip',
      description: '12-core CPU, 19-core GPU, 16-core Neural Engine',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Monitor,
      title: 'Liquid Retina XDR',
      description: '14.2-inch display, 3024×1964 resolution, ProMotion',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Battery,
      title: 'All-Day Battery',
      description: 'Up to 18 hours of video playback',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Camera,
      title: '1080p Camera',
      description: 'Studio-quality three-mic array',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const specs: Spec[] = [
    { label: 'Chip', value: 'Apple M2 Pro' },
    { label: 'Memory', value: '16GB Unified Memory' },
    { label: 'Storage', value: '1TB SSD' },
    { label: 'Display', value: '14.2-inch Liquid Retina XDR' },
    { label: 'Battery', value: 'Up to 18 hours' },
    { label: 'Weight', value: '3.5 pounds (1.6 kg)' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % macbookImages[selectedColor].length);
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedColor]);

  const selectedStorageOption = storageOptions.find(s => s.value === selectedStorage);
  const selectedPrice = selectedStorageOption?.price ?? 1999;
  const originalPrice = selectedStorageOption?.original ?? 2199;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-x-hidden">
      {/* Header */}
      {/* <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg"></span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
                Apple
              </span>
            </motion.div>
            
            <nav className="hidden md:flex space-x-8">
              {['Overview', 'Tech Specs', 'Compare', 'Support'].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.1, color: '#8B5CF6' }}
                  className="text-gray-600 hover:text-purple-600 font-medium cursor-pointer transition-colors"
                  href="#"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsInWishlist(!isInWishlist)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isInWishlist 
                    ? 'bg-red-100 text-red-500 shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Cart (0)</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header> */}

      

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Images */}
          <div className="relative">
            <motion.div
              key={`${selectedColor}-${currentImage}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                <img 
                  src={macbookImages[selectedColor][currentImage]} 
                  alt={`MacBook Pro 14" in ${selectedColor}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              {macbookImages[selectedColor].map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentImage(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    currentImage === index 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Finish</h3>
              <div className="flex justify-center space-x-6">
                {colors.map((color) => (
                  <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setSelectedColor(color.name);
                      setCurrentImage(0);
                    }}
                    className={`flex flex-col items-center space-y-2 p-3 rounded-xl transition-all ${
                      selectedColor === color.name 
                        ? 'bg-purple-50 border-2 border-purple-200' 
                        : 'border-2 border-transparent hover:bg-gray-50'
                    }`}
                  >
                    <div 
                      className={`w-12 h-12 rounded-full border-4 ${
                        selectedColor === color.name 
                          ? 'border-purple-500 ring-2 ring-purple-200' 
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                    <span className={`text-sm font-medium ${
                      selectedColor === color.name ? 'text-purple-600' : 'text-gray-600'
                    }`}>
                      {color.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">4.9 • 2,487 reviews</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-semibold">In Stock</span>
              </div>

              <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                MacBook Pro
              </h1>
              
              <p className="text-2xl text-gray-600 font-light">
                14-inch Display
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Supercharged by M2 Pro and M2 Max, MacBook Pro takes its power and efficiency further than ever. 
                It delivers exceptional performance whether it's plugged in or not, and now has even better battery life.
              </p>
            </motion.div>

            {/* Storage Selection */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-800">Storage</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {storageOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedStorage(option.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedStorage === option.value
                        ? 'border-purple-600 bg-purple-50 shadow-lg'
                        : 'border-gray-300 hover:border-purple-400 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{option.value.toUpperCase()}</div>
                      <div className="flex items-baseline space-x-2 mt-1">
                        <span className="text-lg font-bold text-gray-900">${option.price}</span>
                        <span className="text-sm text-gray-500 line-through">${option.original}</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Price and CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-bold text-gray-900">
                    ${selectedPrice}
                  </span>
                  <span className="text-lg text-green-600 font-semibold bg-green-100 px-2 py-1 rounded">
                    Save ${originalPrice - selectedPrice}
                  </span>
                </div>
                <p className="text-gray-600">or $83.29/mo. for 24 mo.*</p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-lg"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 border-2 border-purple-600 text-purple-600 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              {[
                { icon: Zap, text: 'Up to 18h battery life' },
                { icon: Shield, text: '1-year warranty included' },
                { icon: Truck, text: 'Free delivery tomorrow' },
                { icon: Check, text: 'Free returns' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-700 p-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <feature.icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Why MacBook Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The most advanced MacBook Pro ever. Supercharged for pros.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${feature.color} text-white p-8 rounded-3xl shadow-2xl cursor-pointer group`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900">Hardware</h3>
                {specs.slice(0, 3).map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-gray-200"
                  >
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900">Display & Battery</h3>
                {specs.slice(3).map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center py-3 border-b border-gray-200"
                  >
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-5xl font-bold">Ready to Create Wonder?</h2>
            <p className="text-xl text-gray-300">
              Get the tool that brings your biggest ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-12 py-4 rounded-full font-bold text-lg mt-8 inline-flex items-center space-x-3"
            >
              <span>Order Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      {/* <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gray-900 text-white py-12 border-t border-gray-800"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            * Monthly pricing is available when you select Apple Card Monthly Installments. 
            Subject to credit approval. Taxes and shipping not included.
          </p>
          <p className="text-gray-500 mt-4">
            © 2024 Apple Inc. All rights reserved.
          </p>
        </div>
      </motion.footer> */}

      {/* Floating Animation Elements */}
      <div className="fixed top-1/4 left-4 w-4 h-4 bg-yellow-400 rounded-full animate-float" />
      <div className="fixed top-1/3 right-8 w-6 h-6 bg-pink-400 rounded-full animate-bounce" />
      <div className="fixed bottom-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
    </div>
  );
}