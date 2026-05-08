import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { productCategories } from "@/data/products";
import SearchBar from "@/components/SearchBar";

export default async function ProductsPage() {
  const t = await getTranslations("Products");

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
            {t("heroTitle")}
          </h1>
          <p className="font-source-sans text-zinc-300 text-lg max-w-2xl mx-auto mb-8">
            {t("heroSubtitle")}
          </p>
          <SearchBar variant="compact" />
        </div>
      </section>

      {productCategories.map((cat, ci) => (
        <section
          key={cat.id}
          className={`py-16 ${ci % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white mb-3">
                {cat.name}
              </h2>
              <p className="font-source-sans text-zinc-400 max-w-xl mx-auto">{cat.description}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cat.items.map((product) => (
                <div
                  key={product.id}
                  className="bg-zinc-800/50 border border-zinc-700 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all group"
                >
                  <div className="relative aspect-square bg-gradient-to-br from-zinc-700 to-zinc-800 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-oswald text-sm font-semibold text-white mb-1 leading-tight group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-source-sans text-xs text-zinc-400 mb-3 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    {product.specifications && (
                      <p className="font-source-sans text-xs text-orange-500 mb-2">
                        {t("spec")}: {product.specifications}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block px-2 py-0.5 bg-zinc-700 text-zinc-400 font-source-sans text-xs rounded">
                        {t("moq")}: {product.minOrder}
                      </span>
                      <span className="inline-block px-2 py-0.5 bg-zinc-700 text-zinc-400 font-source-sans text-xs rounded">
                        {product.leadTime}
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="block w-full text-center py-2 bg-orange-500 text-white font-source-sans text-xs font-semibold rounded hover:bg-orange-600 transition-colors"
                    >
                      {t("getQuote")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-oswald text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
          <p className="font-source-sans text-zinc-300 mb-8 max-w-2xl mx-auto">{t("ctaSubtitle")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-source-sans font-semibold rounded hover:bg-orange-600 transition-colors"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
