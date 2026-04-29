export default function QualityPage() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description:
        "Quality Management System - Demonstrates our commitment to consistent quality and continuous improvement.",
    },
    {
      name: "IATF 16949",
      description:
        "Automotive Quality Management Standard - Specifically designed for the automotive industry supply chain.",
    },
    {
      name: "ISO 14001",
      description:
        "Environmental Management System - Shows our commitment to minimizing environmental impact.",
    },
  ];

  const processes = [
    {
      title: "Incoming Material Inspection",
      description:
        "All raw materials are tested for compliance with specifications before entering production.",
    },
    {
      title: "In-Process Quality Control",
      description:
        "Continuous monitoring and testing at every stage of manufacturing.",
    },
    {
      title: "Final Product Testing",
      description:
        "Comprehensive electrical, mechanical, and environmental testing before shipment.",
    },
    {
      title: "Statistical Process Control",
      description:
        "Data-driven quality management using SPC techniques to identify and prevent defects.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
            Quality Assurance
          </h1>
          <p className="font-source-sans text-zinc-300 text-lg max-w-2xl mx-auto">
            Our commitment to quality is backed by internationally recognized
            certifications and rigorous testing protocols.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl font-bold text-white mb-12 text-center">
            Certifications
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
                <h3 className="font-oswald text-xl font-semibold text-white mb-3">
                  {cert.name}
                </h3>
                <p className="font-source-sans text-zinc-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-3xl font-bold text-white mb-12 text-center">
            Quality Control Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-zinc-800/50 rounded-lg border border-zinc-700"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-oswald text-white font-bold">
                    {index + 1}
                  </span>
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

      {/* Stats */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="font-oswald text-5xl font-bold text-orange-500 mb-2">
                99.9%
              </div>
              <div className="font-source-sans text-zinc-300">
                Quality Pass Rate
              </div>
            </div>
            <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="font-oswald text-5xl font-bold text-orange-500 mb-2">
                100%
              </div>
              <div className="font-source-sans text-zinc-300">
                Traceability
              </div>
            </div>
            <div className="p-8 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="font-oswald text-5xl font-bold text-orange-500 mb-2">
                Zero
              </div>
              <div className="font-source-sans text-zinc-300">
                Defect Tolerance
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
