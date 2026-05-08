import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import SearchBar from "@/components/SearchBar";

const CARD_IDS = ["terminals", "housing", "relay", "sealed", "custom"] as const;

const CARD_ICONS = [
  (
    <svg key="0" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="24" r="8" />
      <line x1="24" y1="4" x2="24" y2="12" />
      <line x1="24" y1="36" x2="24" y2="44" />
      <line x1="4" y1="24" x2="12" y2="24" />
      <line x1="36" y1="24" x2="44" y2="24" />
    </svg>
  ),
  (
    <svg key="1" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="16" width="32" height="16" rx="2" />
      <circle cx="16" cy="24" r="3" />
      <circle cx="32" cy="24" r="3" />
    </svg>
  ),
  (
    <svg key="2" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="8" width="24" height="32" rx="2" />
      <line x1="18" y1="16" x2="30" y2="16" />
      <line x1="18" y1="24" x2="30" y2="24" />
      <line x1="18" y1="32" x2="30" y2="32" />
    </svg>
  ),
  (
    <svg key="3" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="8" y="14" width="32" height="20" rx="4" />
      <path d="M14 14v-4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v4" />
      <circle cx="18" cy="24" r="2" />
      <circle cx="30" cy="24" r="2" />
    </svg>
  ),
  (
    <svg key="4" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M24 4l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z" />
    </svg>
  ),
];

export default async function HomePage() {
  const t = await getTranslations("Home");
  const certifications = t.raw("certifications") as { name: string; description: string }[];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="JBJT Global - Precision Automotive Connectors"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-zinc-900/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("heroLine1")}
            <br />
            <span className="text-orange-500">{t("heroLine2")}</span>
          </h1>
          <p className="font-source-sans text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto">
            {t("heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-orange-500 text-white font-source-sans font-semibold rounded hover:bg-orange-600 transition-colors"
            >
              {t("ctaCatalog")}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-source-sans font-semibold rounded hover:bg-white/10 transition-colors"
            >
              {t("ctaContact")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white mb-3">
              {t("searchTitle")}
            </h2>
            <p className="font-source-sans text-zinc-400 text-lg">{t("searchSubtitle")}</p>
          </div>
          <SearchBar variant="hero" placeholder={t("searchPlaceholder")} />
        </div>
      </section>

      <section id="products" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
              {t("rangeTitle")}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARD_IDS.map((id, index) => (
              <div
                key={id}
                className="group p-8 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 text-orange-500 mb-6">{CARD_ICONS[index]}</div>
                <h3 className="font-oswald text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {t(`cards.${id}.title`)}
                </h3>
                <p className="font-source-sans text-zinc-400 text-sm leading-relaxed">
                  {t(`cards.${id}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 font-source-sans font-semibold rounded hover:bg-orange-500 hover:text-white transition-colors"
            >
              {t("viewAll")}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section id="quality" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
                {t("qualityTitle")}
              </h2>
              <p className="font-source-sans text-zinc-300 text-lg leading-relaxed mb-8">
                {t("qualityLead")}
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-zinc-900 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-orange-500/10 rounded flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-oswald text-lg font-semibold text-white">{cert.name}</h4>
                      <p className="font-source-sans text-sm text-zinc-400">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-zinc-800 rounded-lg overflow-hidden">
                <img
                  src="/images/products/product-main.png"
                  alt="Quality"
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-center">
                    <div className="font-oswald text-5xl md:text-6xl font-bold text-white mb-1">
                      99.9%
                    </div>
                    <div className="font-source-sans text-zinc-300 text-lg">{t("passRate")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
              {t("aboutTitle")}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="font-oswald text-5xl font-bold text-orange-500 mb-2">15+</div>
              <div className="font-source-sans text-zinc-300">{t("statYears")}</div>
            </div>
            <div className="p-6">
              <div className="font-oswald text-5xl font-bold text-orange-500 mb-2">500+</div>
              <div className="font-source-sans text-zinc-300">{t("statClients")}</div>
            </div>
            <div className="p-6">
              <div className="font-oswald text-5xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="font-source-sans text-zinc-300">{t("statVariants")}</div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="font-source-sans text-zinc-300 text-lg leading-relaxed text-center">
              {t("aboutLead")}
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
            {t("ctaTouchTitle")}
          </h2>
          <p className="font-source-sans text-zinc-300 text-lg mb-10 max-w-2xl mx-auto">
            {t("ctaTouchLead")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-source-sans font-semibold rounded hover:bg-orange-600 transition-colors"
          >
            {t("ctaTouchButton")}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
