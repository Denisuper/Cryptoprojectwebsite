import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { PageTransition } from "../components/page-transition";

export function PairsPage() {
  const [activeTab, setActiveTab] = useState<"usdc" | "btc">("usdc");

  const usdcPairs = [
    "BTC/USDC", "ETH/USDC", "USDT/USDC", "XRP/USDC", "BNB/USDC", "SOL/USDC",
    "TRX/USDC", "DOGE/USDC", "HYPE/USDC", "LEO/USDC", "ADA/USDC", "BCH/USDC",
    "LINK/USDC", "XMR/USDC", "ZEC/USDC", "USDe/USDC", "CC/USDC", "DAI/USDC",
    "XLM/USDC", "USD1/USDC", "LTC/USDC", "PYUSD/USDC", "AVAX/USDC", "HBAR/USDC",
    "M/USDC", "TON/USDC", "SUI/USDC", "SHIB/USDC", "CRO/USDC", "TAO/USDC",
    "XAUt/USDC", "WLFI/USDC", "PAXG/USDC", "MNT/USDC", "USDG/USDC", "DOT/USDC",
    "UNI/USDC", "NEAR/USDC", "OKB/USDC", "PI/USDC", "SKY/USDC", "ASTER/USDC",
    "USDD/USDC", "RAVE/USDC", "PEPE/USDC", "RLUSD/USDC", "AAVE/USDC", "ICP/USDC",
    "BGB/USDC", "ETC/USDC", "ONDO/USDC", "KCS/USDC", "U/USDC", "RENDER/USDC",
    "WLD/USDC", "ALGO/USDC", "QNT/USDC", "POL/USDC", "ATOM/USDC", "KAS/USDC",
    "DEXE/USDC", "ENA/USDC", "GT/USDC", "MORPHO/USDC", "ARB/USDC", "FLR/USDC",
    "FIL/USDC", "APT/USDC", "TRUMP/USDC", "JST/USDC", "NIGHT/USDC", "ZRO/USDC",
    "PUMP/USDC", "XDC/USDC", "SIREN/USDC", "VET/USDC", "JUP/USDC", "NEXO/USDC",
    "STABLE/USDC", "DASH/USDC", "FET/USDC", "BONK/USDC", "TUSD/USDC", "CAKE/USDC",
    "VIRTUAL/USDC", "EURC/USDC", "PENGU/USDC", "FDUSD/USDC", "STX/USDC", "XTZ/USDC",
    "VVV/USDC", "CHZ/USDC", "SEI/USDC", "DCR/USDC", "MON/USDC", "SUN/USDC",
    "AERO/USDC", "NFT/USDC", "ETHFI/USDC", "BTT/USDC", "CRV/USDC", "EDGE/USDC",
    "GNO/USDC", "BSV/USDC", "KAIA/USDC", "INJ/USDC", "LIT/USDC", "SPX/USDC",
    "IMX/USDC", "CFX/USDC", "2Z/USDC", "LDO/USDC", "SYRUP/USDC", "TIA/USDC",
    "FLOKI/USDC", "JASMY/USDC", "ZBCN/USDC", "GRT/USDC", "H/USDC", "PYTH/USDC",
    "KITE/USDC", "IOTA/USDC", "XPL/USDC", "OP/USDC", "LUNC/USDC", "SAND/USDC",
    "ENS/USDC", "COMP/USDC", "VSN/USDC"
  ];

  const btcPairs = [
    "ETH/BTC", "SOL/BTC", "XRP/BTC", "BNB/BTC", "DOGE/BTC", "ADA/BTC",
    "BCH/BTC", "LINK/BTC", "XMR/BTC", "ZEC/BTC", "AVAX/BTC", "HBAR/BTC",
    "TON/BTC", "SUI/BTC", "SHIB/BTC", "CRO/BTC", "TAO/BTC", "LTC/BTC",
    "DOT/BTC", "UNI/BTC", "NEAR/BTC", "OKB/BTC", "ARB/BTC", "FIL/BTC",
    "APT/BTC", "PEPE/BTC", "WLD/BTC", "ALGO/BTC", "POL/BTC", "ATOM/BTC",
    "KAS/BTC", "DEXE/BTC", "ENA/BTC", "GT/BTC", "MORPHO/BTC", "FLR/BTC",
    "XDC/BTC", "VET/BTC", "JUP/BTC", "NEXO/BTC", "DASH/BTC", "FET/BTC",
    "BONK/BTC", "TUSD/BTC", "CAKE/BTC", "VIRTUAL/BTC", "EURC/BTC", "FDUSD/BTC",
    "STX/BTC", "XTZ/BTC", "CHZ/BTC", "SEI/BTC", "DCR/BTC", "SUN/BTC",
    "AERO/BTC", "ETHFI/BTC", "BTT/BTC", "CRV/BTC", "GNO/BTC", "BSV/BTC",
    "KAIA/BTC", "INJ/BTC", "LIT/BTC", "SPX/BTC", "IMX/BTC", "CFX/BTC",
    "LDO/BTC", "TIA/BTC", "FLOKI/BTC", "JASMY/BTC", "GRT/BTC", "PYTH/BTC",
    "IOTA/BTC", "OP/BTC", "LUNC/BTC", "SAND/BTC", "ENS/BTC", "COMP/BTC"
  ];

  const displayPairs = activeTab === "usdc" ? usdcPairs : btcPairs;

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Trading Pairs - PropDAO Supported Assets</title>
          <meta name="description" content="View all available trading pairs on PropDAO. Trade BTC, ETH, SOL, and 200+ other cryptocurrency pairs with USDC and BTC on our decentralized prop trading platform." />
          <meta name="keywords" content="PropDAO pairs, crypto trading pairs, BTC pairs, USDC pairs, supported assets, trading markets, cryptocurrency pairs" />

          <meta property="og:title" content="Trading Pairs - PropDAO Supported Assets" />
          <meta property="og:description" content="View all available trading pairs on PropDAO. Trade BTC, ETH, SOL, and 200+ other cryptocurrency pairs." />

          <meta name="twitter:title" content="Trading Pairs - PropDAO Supported Assets" />
          <meta name="twitter:description" content="View all available trading pairs on PropDAO. Trade BTC, ETH, SOL, and 200+ other cryptocurrency pairs." />

          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.propdao.finance/pairs" />
        </Helmet>

        <Navbar />

        <section className="pt-32 pb-16 bg-gradient-to-b from-[#f9f9f5] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#2a2d1f] mb-6">
                Trading Pairs
              </h1>
              <p className="text-xl text-[#5a5d4a] mb-8">
                All available trading pairs on PropDAO platform
              </p>

              {/* Tab Selector */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("usdc")}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "usdc"
                      ? "bg-[#8fa670] text-white shadow-lg"
                      : "bg-white border-2 border-[#8fa670] text-[#2a2d1f] hover:bg-[#f5f5ef]"
                  }`}
                >
                  USDC Pairs ({usdcPairs.length})
                </button>
                <button
                  onClick={() => setActiveTab("btc")}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "btc"
                      ? "bg-[#8fa670] text-white shadow-lg"
                      : "bg-white border-2 border-[#8fa670] text-[#2a2d1f] hover:bg-[#f5f5ef]"
                  }`}
                >
                  BTC Pairs ({btcPairs.length})
                </button>
              </div>
            </motion.div>

            {/* Pairs Table */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-[#8fa670]/30 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Table Header - Hidden on mobile */}
              <div className="hidden md:block bg-gradient-to-r from-[#8fa670] to-[#7a9160] px-6 py-4">
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-white font-semibold">#</div>
                  <div className="text-white font-semibold">Pair</div>
                  <div className="text-white font-semibold">Base Asset</div>
                  <div className="text-white font-semibold">Quote Asset</div>
                </div>
              </div>

              {/* Mobile Header */}
              <div className="md:hidden bg-gradient-to-r from-[#8fa670] to-[#7a9160] px-4 py-4">
                <div className="text-white font-semibold text-center">Trading Pairs</div>
              </div>

              {/* Table Body */}
              <div className="max-h-[600px] overflow-y-auto">
                {displayPairs.map((pair, index) => {
                  const [base, quote] = pair.split("/");
                  const isArb = base === "ARB";

                  return (
                    <div
                      key={pair}
                      className={`px-4 md:px-6 py-4 border-b border-[#8fa670]/10 hover:bg-[#f9f9f5] transition-colors ${
                          isArb ? "bg-[#8fa670]/5" : ""
                        }`}
                    >
                      {/* Desktop layout */}
                      <div className="hidden md:grid grid-cols-4 gap-4">
                        <div className="text-[#5a5d4a] font-mono">{index + 1}</div>
                        <div className="text-[#2a2d1f] font-semibold font-mono">
                          {pair}
                          {isArb && (
                            <span className="ml-2 text-xs bg-[#8fa670] text-white px-2 py-1 rounded">
                              Native
                            </span>
                          )}
                        </div>
                        <div className="text-[#5a5d4a] font-mono">{base}</div>
                        <div className="text-[#5a5d4a] font-mono">{quote}</div>
                      </div>

                      {/* Mobile layout */}
                      <div className="md:hidden">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-[#2a2d1f] font-semibold font-mono text-lg">
                            {pair}
                          </div>
                          <div className="text-[#5a5d4a] font-mono text-sm">#{index + 1}</div>
                        </div>
                        {isArb && (
                          <div className="mb-2">
                            <span className="text-xs bg-[#8fa670] text-white px-2 py-1 rounded">
                              Native
                            </span>
                          </div>
                        )}
                        <div className="flex gap-4 text-sm">
                          <div className="text-[#5a5d4a]">
                            <span className="font-semibold">Base:</span> <span className="font-mono">{base}</span>
                          </div>
                          <div className="text-[#5a5d4a]">
                            <span className="font-semibold">Quote:</span> <span className="font-mono">{quote}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Table Footer */}
              <div className="border-t-2 border-[#8fa670]/20 px-6 py-4 bg-[#f9f9f5]">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#5a5d4a]">
                    Total Pairs: <strong>{displayPairs.length}</strong>
                  </p>
                  <p className="text-sm text-[#5a5d4a]">
                    More pairs coming soon
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="bg-gradient-to-br from-[#8fa670]/10 to-[#7a9160]/10 border-2 border-[#8fa670] rounded-lg py-6 px-8 max-w-2xl mx-auto">
                <p className="text-[#2a2d1f] text-lg font-bold mb-2">
                  💡 Trading Information
                </p>
                <p className="text-[#5a5d4a]">
                  All pairs are available for trading during the evaluation phase and funded accounts. ARB/USDC is highlighted as it's the native token of Arbitrum.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}