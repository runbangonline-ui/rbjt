import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("About");
  const certBadges = t.raw("certBadges") as string[];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
            {t("heroTitle")}
          </h1>
          <p className="font-source-sans text-zinc-300 text-lg max-w-2xl mx-auto">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-oswald text-3xl font-bold text-white mb-6">{t("storyTitle")}</h2>
              <p className="font-source-sans text-zinc-300 leading-relaxed mb-4">{t("storyP1")}</p>
              <p className="font-source-sans text-zinc-300 leading-relaxed mb-4">{t("storyP2")}</p>
              <p className="font-source-sans text-zinc-300 leading-relaxed">{t("storyP3")}</p>
            </div>
            <div className="aspect-square bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center">
              <div className="text-center">
                <div className="font-oswald text-6xl font-bold text-orange-500 mb-2">15+</div>
                <div className="font-source-sans text-zinc-400">{t("yearsBadge")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="font-oswald text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                500+
              </div>
              <div className="font-source-sans text-zinc-300 text-sm">{t("statsClients")}</div>
            </div>
            <div className="p-6">
              <div className="font-oswald text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                1000+
              </div>
              <div className="font-source-sans text-zinc-300 text-sm">{t("statsVariants")}</div>
            </div>
            <div className="p-6">
              <div className="font-oswald text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                50+
              </div>
              <div className="font-source-sans text-zinc-300 text-sm">{t("statsCountries")}</div>
            </div>
            <div className="p-6">
              <div className="font-oswald text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                99.9%
              </div>
              <div className="font-source-sans text-zinc-300 text-sm">{t("statsPass")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl font-bold text-white mb-12 text-center">
            {t("valuesTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="w-12 h-12 bg-orange-500/10 rounded flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
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
              <h3 className="font-oswald text-xl font-semibold text-white mb-3">{t("v1Title")}</h3>
              <p className="font-source-sans text-zinc-400 text-sm leading-relaxed">{t("v1Body")}</p>
            </div>
            <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="w-12 h-12 bg-orange-500/10 rounded flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-oswald text-xl font-semibold text-white mb-3">{t("v2Title")}</h3>
              <p className="font-source-sans text-zinc-400 text-sm leading-relaxed">{t("v2Body")}</p>
            </div>
            <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="w-12 h-12 bg-orange-500/10 rounded flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 013-3h5a3 3 0 013 3v2zm0-10a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-oswald text-xl font-semibold text-white mb-3">{t("v3Title")}</h3>
              <p className="font-source-sans text-zinc-400 text-sm leading-relaxed">{t("v3Body")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-oswald text-3xl font-bold text-white mb-12">{t("certStripTitle")}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {certBadges.map((cert) => (
              <div
                key={cert}
                className="px-8 py-4 bg-zinc-800 rounded-lg border border-zinc-700"
              >
                <span className="font-oswald text-lg font-semibold text-white">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
