import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { FeaturesSection } from "../components/features-section";
import { FAQSection } from "../components/faq-section";
import { TokenomicsSection } from "../components/tokenomics-section";
import { ProfitCalculator } from "../components/profit-calculator";
import { CTASection } from "../components/cta-section";
import { Footer } from "../components/footer";
import { Helmet } from "react-helmet-async";
import { PageTransition } from "../components/page-transition";

export function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>PropDAO - The First Fully Decentralized Proprietary Trading Firm</title>
          <meta name="description" content="Join PropDAO, the world's first decentralized prop trading firm built on Arbitrum. Get funded, trade crypto, and earn real payouts with no KYC required. Powered by blockchain technology and smart contracts." />
          <meta name="keywords" content="PropDAO, decentralized trading, prop firm, crypto trading, Arbitrum, DeFi, blockchain trading, funded trader, crypto payouts, no KYC" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PropDAO - The First Fully Decentralized Proprietary Trading Firm" />
          <meta property="og:description" content="Join PropDAO, the world's first decentralized prop trading firm built on Arbitrum. Get funded, trade crypto, and earn real payouts with no KYC required." />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="PropDAO - The First Fully Decentralized Proprietary Trading Firm" />
          <meta name="twitter:description" content="Join PropDAO, the world's first decentralized prop trading firm built on Arbitrum. Get funded, trade crypto, and earn real payouts with no KYC required." />

          {/* Additional SEO */}
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.propdao.finance" />
        </Helmet>

        <Navbar />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ProfitCalculator />
        <FAQSection />
        <TokenomicsSection />
        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
}
