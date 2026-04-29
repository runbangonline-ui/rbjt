import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-oswald text-xl font-bold text-white mb-4">
              JBJT Global
            </h3>
            <p className="font-source-sans text-zinc-400 text-sm leading-relaxed mb-4">
              Leading manufacturer of precision automotive connectors and
              terminals. Engineered for performance, trusted worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-zinc-400 hover:text-orange-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.33-1.37 2.393-1.847 5.093-.893 7.637-.663-.17-1.317-.406-1.933-.717v.075c0 2.575 1.828 4.758 4.246 5.25-.883.181-1.817.233-2.765.084.784 2.38 2.992 4.132 5.616 4.217-2.124 1.664-4.804 2.65-7.717 2.65-.502 0-.998-.029-1.485-.084 2.738 1.752 5.992 2.775 9.482 2.775 11.4 0 17.628-9.447 17.628-17.332 0-.264-.006-.527-.019-.789.941-.675 1.763-1.516 2.4-2.481z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-orange-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Products", "Quality", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="font-source-sans text-sm text-zinc-400 hover:text-orange-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-oswald text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 font-source-sans text-sm text-zinc-400">
              <li>Hainan, China</li>
              <li>info@rbjtglobal.com</li>
              <li>+86 XXX XXXX XXXX</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-zinc-800">
          <p className="font-source-sans text-xs text-zinc-500 text-center">
            © {new Date().getFullYear()} JBJT Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
