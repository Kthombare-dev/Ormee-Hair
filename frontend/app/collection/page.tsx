"use client";

import Image from "next/image";
import { Star, Filter, Grid, List } from "lucide-react";
import { useState } from "react";

const Collections = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'straight', label: 'Straight Hair' },
    { id: 'curly', label: 'Curly Hair' },
    { id: 'wavy', label: 'Wavy Hair' },
    { id: 'textured', label: 'Textured Hair' }
  ];

  const collections = [
    {
      id: 1,
      name: "Silky Straight Collection",
      description: "Premium straight hair extensions for a sleek, sophisticated look",
      price: "$299",
      originalPrice: "$399",
      image: "/collections/straight-hair.jpg",
      rating: 4.8,
      reviews: 124,
      category: 'straight'
    },
    {
      id: 2,
      name: "Natural Curls Collection",
      description: "Bouncy, natural-looking curls that blend seamlessly",
      price: "$349",
      originalPrice: "$449",
      image: "/collections/curly-hair.jpg",
      rating: 4.9,
      reviews: 89,
      category: 'curly'
    },
    {
      id: 3,
      name: "Beach Waves Collection",
      description: "Effortless waves for that perfect beachy vibe",
      price: "$279",
      originalPrice: "$359",
      image: "/collections/wavy-hair.jpg",
      rating: 4.7,
      reviews: 156,
      category: 'wavy'
    },
    {
      id: 4,
      name: "Textured Volume Collection",
      description: "Add volume and texture for fuller, richer hair",
      price: "$329",
      originalPrice: "$429",
      image: "/collections/textured-hair.jpg",
      rating: 4.8,
      reviews: 98,
      category: 'textured'
    },
    {
      id: 5,
      name: "Platinum Blonde Collection",
      description: "Stunning platinum blonde extensions for a bold statement",
      price: "$389",
      originalPrice: "$489",
      image: "/collections/blonde-hair.jpg",
      rating: 4.9,
      reviews: 67,
      category: 'straight'
    },
    {
      id: 6,
      name: "Chocolate Brown Collection",
      description: "Rich, luxurious brown tones for natural elegance",
      price: "$319",
      originalPrice: "$419",
      image: "/collections/brown-hair.jpg",
      rating: 4.8,
      reviews: 143,
      category: 'wavy'
    }
  ];

  const filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-amber-50 to-stone-50">
      {/* Header Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">
              Our Collections
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Discover our premium hair extension collections, crafted with the finest materials for natural beauty and lasting quality.
            </p>
          </div>

          {/* Filters and View Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-stone-200/80 text-stone-700 hover:bg-amber-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' ? 'bg-amber-600 text-white' : 'bg-stone-200/80 text-stone-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' ? 'bg-amber-600 text-white' : 'bg-stone-200/80 text-stone-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredCollections.map((collection) => (
              <div
                key={collection.id}
                className={`bg-stone-50/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-200/50 ${
                  viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                }`}
              >
                <div className={`relative ${viewMode === 'list' ? 'md:w-1/3 h-64 md:h-auto' : 'h-64'}`}>
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                    Save {Math.round(((parseFloat(collection.originalPrice.slice(1)) - parseFloat(collection.price.slice(1))) / parseFloat(collection.originalPrice.slice(1))) * 100)}%
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-between' : ''}`}>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-stone-800">{collection.name}</h3>
                    <p className="text-stone-600 mb-4">{collection.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(collection.rating)
                                ? 'text-amber-500 fill-current'
                                : 'text-stone-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-stone-500">
                        {collection.rating} ({collection.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-amber-700">{collection.price}</span>
                      <span className="text-lg text-stone-500 line-through">{collection.originalPrice}</span>
                    </div>
                    <button className="px-6 py-3 rounded-lg bg-stone-800 text-white font-semibold shadow hover:shadow-lg hover:bg-stone-700 transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
