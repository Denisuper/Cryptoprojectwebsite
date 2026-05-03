import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { WhitepaperContent } from "../components/whitepaper-content";
import { PageTransition } from "../components/page-transition";

export function WhitepaperPage() {

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Whitepaper - PropDAO Protocol Documentation</title>
          <meta name="description" content="Read the PropDAO whitepaper to learn about our vision, technology, tokenomics, and how we're building the first fully decentralized proprietary trading firm on Arbitrum blockchain." />
          <meta name="keywords" content="PropDAO whitepaper, DeFi whitepaper, prop trading protocol, tokenomics, blockchain trading, Arbitrum DeFi, decentralized finance documentation" />

          <meta property="og:title" content="Whitepaper - PropDAO Protocol Documentation" />
          <meta property="og:description" content="Read the PropDAO whitepaper to learn about our vision, technology, tokenomics, and how we're building the first fully decentralized proprietary trading firm." />

          <meta name="twitter:title" content="Whitepaper - PropDAO Protocol Documentation" />
          <meta name="twitter:description" content="Read the PropDAO whitepaper to learn about our vision, technology, tokenomics, and how we're building the first fully decentralized proprietary trading firm." />

          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.propdao.finance/whitepaper" />
        </Helmet>

        <Navbar />

        <section className="pt-32 pb-16 bg-gradient-to-b from-[#f9f9f5] to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#2a2d1f] mb-6">
                Whitepaper
              </h1>
              <p className="text-xl text-[#5a5d4a]">
                Learn about PropDAO's vision, technology, and tokenomics
              </p>
            </motion.div>

            {/* PDF Viewer Container */}
            <motion.div
              className="bg-white border-2 border-[#8fa670]/30 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#8fa670] to-[#7a9160] px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold text-lg">
                    PropDAO Whitepaper
                  </div>
                  <a
                    href="https://twitter.com/PropDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#f9f9f5] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span className="text-sm">Follow us</span>
                  </a>
                </div>
              </div>

              {/* Whitepaper Content */}
              <div className="bg-white border-0 overflow-y-auto" style={{ maxHeight: '800px' }}>
                <WhitepaperContent />
              </div>

              {/* Footer */}
              <div className="border-t border-[#8fa670]/20 px-6 py-4 bg-[#f9f9f5]">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#5a5d4a]">
                    © 2026 PropDAO. Built on Arbitrum.
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1nizOfrKqyIm67JtwBuvYUzC579tIE8Q0Rt5IReB4AN0/export?format=pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-[#8fa670] text-white rounded-lg font-semibold hover:bg-[#7a9160] transition-colors"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}