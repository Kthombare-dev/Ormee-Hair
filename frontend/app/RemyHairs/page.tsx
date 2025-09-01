"use client";
 
import { useEffect, useState, useCallback, useRef } from "react";
 
export interface RemyProductsPageState {
  currentPage: number;
  search: string;
  searchInput: string;
}
 
const STORAGE_KEY = "renny-products-page-state";
 
const DEFAULT_STATE: RemyProductsPageState = {
  currentPage: 1,
  search: "",
  searchInput: "",
};
 
const PRODUCTS = Array.from({ length: 12 }, (_, i) => ({
  id: `p${i + 1}`,
  name: `Renny Hair Product ${i + 1}`,
  price: (i + 1) * 10,
  image: `https://picsum.photos/300?random=${i + 1}`,
}));
 
const ITEMS_PER_PAGE = 6;
 
export default function RemyHairs() {
  const [state, setState] = useState(DEFAULT_STATE);
  const isInitialized = useRef(false);
 
  useEffect(() => {
    if (typeof window !== "undefined" && !isInitialized.current) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setState(JSON.parse(saved));
      isInitialized.current = true;
    }
  }, []);
 
  const updateState = useCallback((newState: Partial<RemyProductsPageState>) => {
    setState((prev) => {
      const updated = { ...prev, ...newState };
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
      return updated;
    });
  }, []);
 
  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(state.search.toLowerCase())
  );
  const start = (state.currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);
 
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 mt-6">Renny Hairs Products</h1>
      <p className="text-gray-500 mb-8">Explore our renny hairs product showcase</p>
 
      {/* Search */}
      <div className="flex gap-2 mb-10">
        <input
          value={state.searchInput}
          onChange={(e) => updateState({ searchInput: e.target.value })}
          placeholder="Search products..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={() =>
            updateState({ search: state.searchInput, currentPage: 1 })
          }
          className="px-5 py-2 rounded-lg bg-black text-white hover:bg-black transition"
        >
          Search
        </button>
      </div>
 
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {paginated.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={p.image}
              alt={p.name}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{p.name}</h3>
 
            {/* Price + View Details in one row */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600 font-medium">${p.price}</p>
              <button className="text-primary font-medium hover:underline">
                View Details
              </button>
            </div>
 
            <button className="mt-auto w-full py-2 rounded-lg bg-black text-white hover:bg-gray-500 transition">
              Add to Cart
            </button>
          </div>
        ))}
        {paginated.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
 
      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() =>
            updateState({ currentPage: Math.max(1, state.currentPage - 1) })
          }
          disabled={state.currentPage === 1}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-40"
        >
          Prev
        </button>
        <span className="text-lg font-medium">
          Page {state.currentPage} of {Math.ceil(filtered.length / ITEMS_PER_PAGE)}
        </span>
        <button
          onClick={() => updateState({ currentPage: state.currentPage + 1 })}
          disabled={start + ITEMS_PER_PAGE >= filtered.length}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </main>
  );
}
 