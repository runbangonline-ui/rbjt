import Link from "next/link";

const productCategories = [
  {
    title: "Wire Terminals",
    description:
      "High-quality crimp terminals for reliable wire connections in automotive applications. Available in various sizes and configurations.",
    features: [
      "Insulated and non-insulated options",
      "Multiple wire gauge compatibility",
      "High conductivity copper alloy",
      "RoHS compliant",
    ],
    image: "/images/wire-terminals.jpg",
  },
  {
    title: "Connector Housings",
    description:
      "Durable connector housings designed for harsh automotive environments. Engineered for secure mating and long-term reliability.",
    features: [
      "High-temperature resistant materials",
      "Secure locking mechanisms",
      "Multiple pin configurations",
      "IP67 rated options available",
    ],
    image: "/images/connector-housings.jpg",
  },
  {
    title: "Automotive Relay Sockets",
    description:
      "Precision relay sockets for automotive electrical systems and control modules.",
    features: [
      "Standard and mini relay formats",
      "High current capacity",
      "Vibration resistant design",
      "Easy insertion/removal",
    ],
    image: "/images/relay-sockets.jpg",
  },
  {
    title: "Sealed Connectors",
    description:
      "Waterproof and dustproof connectors meeting IP67/IP68 standards for demanding applications.",
    features: [
      "IP67/IP68 rated",
      "Silicone sealing gaskets",
      "Corrosion resistant contacts",
      "Temperature range: -40°C to +125°C",
    ],
    image: "/images/sealed-connectors.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="font-source-sans text-zinc-300 text-lg max-w-2xl mx-auto">
            Comprehensive range of automotive connectors and terminals engineered
            for performance and reliability.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="font-oswald text-3xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <p className="font-source-sans text-zinc-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start space-x-2 font-source-sans text-sm text-zinc-400"
                      >
                        <svg
                          className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-source-sans font-semibold rounded hover:bg-orange-600 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="aspect-video bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 text-zinc-600 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="font-source-sans text-zinc-500 text-sm">
                        Product Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-oswald text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="font-source-sans text-zinc-300 mb-8 max-w-2xl mx-auto">
            Our engineering team can design and manufacture custom connectors
            tailored to your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-source-sans font-semibold rounded hover:bg-orange-600 transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
