import { getTranslations } from "next-intl/server";

export default async function QualityPage() {
  const t = await getTranslations("Quality");
  const certifications = t.raw("certs") as { name: string; description: string }[];
  const processes = t.raw("processes") as { title: string; description: string }[];

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
          <h2 className="font-oswald text-3xl font-bold text-white mb-12 text-center">
            {t("certHeading")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-8 bg-zinc-900 rounded-lg border border-zinc-800 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-500/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-orange-500"
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
                <h3 className="font-oswald text-xl font-semibold text-white mb-3">{cert.name}</h3>
                <p className="font-source-sans text-zinc-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl font-bold text-white mb-12 text-center">
            {t("processHeading")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-zinc-800/50 rounded-lg border border-zinc-700"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-oswald text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-oswald text-lg font-semibold text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="font-source-sans text-zinc-400 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="font-oswald text-5xl font-bold text-orange-500 mb-2">99.9%</div>
              <div className="font-source-sans text-zinc-300">{t("statPass")}</div>
            </div>
            <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="font-oswald text-5xl font-bold text-orange-500 mb-2">100%</div>
              <div className="font-source-sans text-zinc-300">{t("statTrace")}</div>
            </div>
            <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="font-oswald text-5xl font-bold text-orange-500 mb-2">Zero</div>
              <div className="font-source-sans text-zinc-300">{t("statDefect")}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
