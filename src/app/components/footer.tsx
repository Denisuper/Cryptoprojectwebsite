import logo from "figma:asset/005df1f965f8a32d07a0bcc0c23a7079e8988399.png";
import { useNavigate, useLocation } from "react-router";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const links = {
    product: [
      { label: "About", id: "about" },
      { label: "FAQ", id: "faq" },
      { label: "Tokenomics", id: "tokenomics" },
    ],
    community: [
      { label: "X (Formerly Twitter)", href: "https://x.com/propdaofinance" },
      { label: "Telegram", href: "https://t.me/propdao" },
    ],
  };

  return (
    <footer className="bg-white border-t border-[#8fa670]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="PropDAO Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-[#2a2d1f]">PropDAO</span>
            </div>
            <p className="text-[#5a5d4a] text-sm mb-4">
              The first fully decentralized proprietary trading firm.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-[#2a2d1f] font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#5a5d4a] hover:text-[#2a2d1f] transition-all duration-300 ease-in-out text-sm hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-[#2a2d1f] font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#5a5d4a] hover:text-[#2a2d1f] transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#8fa670]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#5a5d4a] text-sm">
              © 2026 PropDAO. All rights reserved.
            </p>
            <p className="text-[#5a5d4a] text-sm">
              Built on Arbitrum • Secured by Smart Contracts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}