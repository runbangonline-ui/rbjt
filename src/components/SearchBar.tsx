"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { productCategories } from "@/data/products";
import { Product } from "@/data/products";

const allProducts: Product[] = productCategories.flatMap((cat) => cat.items);

interface SearchResult {
  product: Product;
  category: string;
  matchType: "model" | "name" | "spec";
}

export default function SearchBar({
  variant = "default",
  placeholder,
}: {
  variant?: "hero" | "default" | "compact";
  placeholder?: string;
}) {
  const tCommon = useTranslations("Common");
  const tProducts = useTranslations("Products");
  const router = useRouter();
  const ph = placeholder ?? tProducts("searchPlaceholder");

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchTerm = query.toLowerCase().trim();
    const matches: SearchResult[] = [];

    allProducts.forEach((product) => {
      if (product.model?.toLowerCase().includes(searchTerm)) {
        matches.push({ product, category: product.category, matchType: "model" });
      }
    });

    allProducts.forEach((product) => {
      if (
        product.name.toLowerCase().includes(searchTerm) &&
        !matches.some((m) => m.product.id === product.id)
      ) {
        matches.push({ product, category: product.category, matchType: "name" });
      }
    });

    allProducts.forEach((product) => {
      if (
        product.specifications?.toLowerCase().includes(searchTerm) &&
        !matches.some((m) => m.product.id === product.id)
      ) {
        matches.push({ product, category: product.category, matchType: "spec" });
      }
    });

    setResults(matches.slice(0, 8));
    setIsOpen(matches.length > 0);
    setSelectedIndex(-1);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      const p = results[selectedIndex].product;
      router.push(`/contact?model=${encodeURIComponent(p.model || p.name)}`);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const baseStyles =
    variant === "hero"
      ? "w-full max-w-2xl text-lg"
      : variant === "compact"
        ? "w-full max-w-md text-sm"
        : "w-full max-w-xl text-base";

  const inputStyles =
    variant === "hero"
      ? "h-14 pl-14 pr-32 rounded-full"
      : variant === "compact"
        ? "h-10 pl-10 pr-24 rounded-full"
        : "h-12 pl-12 pr-28 rounded-full";

  const iconSize = variant === "compact" ? "w-5 h-5 left-3" : "w-6 h-6 left-4";
  const btnSize = variant === "compact" ? "px-5 py-1.5 text-sm" : "px-6 py-2.5 text-base";

  const matchLabel = (m: SearchResult["matchType"]) =>
    m === "model" ? tCommon("matchModel") : m === "name" ? tCommon("matchName") : tCommon("matchSpec");

  return (
    <div ref={dropdownRef} className={`relative ${baseStyles} mx-auto`}>
      <div className="relative">
        <svg
          className={`absolute ${iconSize} top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={ph}
          className={`${inputStyles} w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all ${variant === "hero" ? "shadow-2xl shadow-black/30" : ""}`}
        />

        <button
          type="button"
          onClick={() => query.trim().length >= 2 && setIsOpen(true)}
          className={`absolute top-1/2 -translate-y-1/2 right-2 ${btnSize} bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors`}
        >
          {tCommon("search")}
        </button>
      </div>

      {isOpen && results.length > 0 && (
        <div
          className={`absolute z-50 mt-2 w-full ${variant === "hero" ? "bg-zinc-900/98 backdrop-blur-md" : "bg-white"} rounded-xl shadow-2xl border ${variant === "hero" ? "border-zinc-700" : "border-slate-200"} overflow-hidden`}
        >
          <div
            className={`px-4 py-2 text-xs font-medium ${variant === "hero" ? "text-zinc-400 bg-zinc-800/50" : "text-slate-500 bg-slate-50"}`}
          >
            {tCommon("resultsFound", { count: results.length })}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {results.map((result, index) => (
              <Link
                key={result.product.id}
                href={`/contact?model=${encodeURIComponent(result.product.model || result.product.name)}`}
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
                className={`flex items-center gap-4 px-4 py-3 transition-colors ${
                  variant === "hero"
                    ? index === selectedIndex
                      ? "bg-orange-500/20"
                      : "hover:bg-white/5"
                    : index === selectedIndex
                      ? "bg-orange-50"
                      : "hover:bg-slate-50"
                } ${index !== results.length - 1 ? `border-b ${variant === "hero" ? "border-zinc-700" : "border-slate-100"}` : ""}`}
              >
                <span
                  className={`flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded ${
                    result.matchType === "model"
                      ? "bg-orange-500/20 text-orange-400"
                      : result.matchType === "name"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {matchLabel(result.matchType)}
                </span>

                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-zinc-700 to-zinc-800">
                  <img
                    src={result.product.image}
                    alt={result.product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div
                    className={`font-semibold truncate ${variant === "hero" ? "text-white" : "text-slate-900"}`}
                  >
                    {result.product.model || result.product.name}
                  </div>
                  <div
                    className={`text-sm truncate ${variant === "hero" ? "text-zinc-400" : "text-slate-500"}`}
                  >
                    {result.product.name}
                  </div>
                </div>

                <svg
                  className={`w-5 h-5 flex-shrink-0 ${variant === "hero" ? "text-zinc-500" : "text-slate-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>

          <div
            className={`px-4 py-3 text-center ${variant === "hero" ? "bg-zinc-800/50 border-t border-zinc-700" : "bg-slate-50 border-t border-slate-100"}`}
          >
            <Link
              href={`/contact?model=${encodeURIComponent(query)}`}
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
              className={`text-sm font-medium ${variant === "hero" ? "text-orange-400 hover:text-orange-300" : "text-orange-600 hover:text-orange-500"}`}
            >
              {tCommon("cantFind", { query })}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
