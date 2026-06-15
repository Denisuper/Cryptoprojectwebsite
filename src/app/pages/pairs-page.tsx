import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { PageTransition } from "../components/page-transition";
import { marketAssets } from "../data/markets";
import { CryptoIcon } from "../components/crypto-icon";

export function PairsPage() {
  const [activeTab, setActiveTab] = useState<"All" | "Crypto" | "Alt" | "Meme" | "Indice" | "Commodity">("All");

  const filteredAssets = activeTab === "All"
    ? marketAssets
    : marketAssets.filter(asset => asset.type === activeTab);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Markets - PropDAO Supported Assets</title>
          <meta name="description" content="View all available trading pairs on PropDAO. Trade BTC, ETH, SOL, and 200+ other cryptocurrency pairs with high leverage on our decentralized prop trading platform." />
        </Helmet>

        <Navbar />

        <section className="pt-32 pb-16 bg-gradient-to-b from-[#f9f9f5] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#2a2d1f] mb-6">
                Market View
              </h1>
              <p className="text-xl text-[#5a5d4a] mb-8">
                Trade 200+ assets with up to 5x leverage
              </p>

              {/* Tab Selector */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["All", "Crypto", "Alt", "Meme", "Indice", "Commodity"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all border-2 ${
                      activeTab === tab
                        ? "bg-[#8fa670] border-[#8fa670] text-white shadow-lg"
                        : "bg-white border-[#8fa670]/20 text-[#2a2d1f] hover:bg-[#f5f5ef]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Assets Table */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-[#8fa670]/30 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Table Header */}
              <div className="bg-[#f9f9f5] border-b-2 border-[#8fa670]/20 px-6 py-4">
                <div className="grid grid-cols-6 gap-4 text-[#5a5d4a] font-bold text-sm uppercase tracking-wider">
                  <div className="col-span-2">Asset</div>
                  <div className="text-right">Price</div>
                  <div className="text-right">24h Change</div>
                  <div className="text-right">Volume</div>
                  <div className="text-right">Max Leverage</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-[#8fa670]/10">
                {filteredAssets.map((asset) => (
                  <div
                    key={asset.pair}
                    className="px-6 py-4 hover:bg-[#f9f9f5] transition-colors cursor-pointer group"
                  >
                    <div className="grid grid-cols-6 gap-4 items-center">
                      <div className="col-span-2 flex items-center gap-3">
                        <CryptoIcon symbol={asset.symbol} size={40} />
                        <div>
                          <div className="text-[#2a2d1f] font-bold">{asset.symbol}</div>
                          <div className="text-[#5a5d4a] text-xs uppercase tracking-tighter">{asset.name}</div>
                        </div>
                        <span className="text-[10px] bg-[#f5f5ef] px-2 py-0.5 rounded text-[#5a5d4a] border border-[#8fa670]/20">
                          {asset.type}
                        </span>
                      </div>
                      <div className="text-right text-[#2a2d1f] font-mono font-bold">
                        ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <div className={`text-right font-mono font-bold ${asset.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {asset.change24h >= 0 ? "+" : ""}{asset.change24h}%
                      </div>
                      <div className="text-right text-[#5a5d4a] font-mono">
                        {asset.volume24h}
                      </div>
                      <div className="text-right">
                        <span className="bg-[#8fa670]/10 text-[#8fa670] px-3 py-1 rounded-full font-bold text-sm">
                          {asset.maxLeverage}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Footer */}
              <div className="border-t-2 border-[#8fa670]/20 px-6 py-4 bg-[#f9f9f5]">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#5a5d4a]">
                    Showing <strong>{filteredAssets.length}</strong> assets
                  </p>
                  <p className="text-sm text-[#8fa670] font-bold">
                    Trade now with PropDAO Terminal
                  </p>
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
