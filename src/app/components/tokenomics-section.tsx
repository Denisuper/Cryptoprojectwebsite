import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { TokenomicsHexagon } from "./tokenomics-hexagon";

export function TokenomicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="tokenomics"
      className="py-24 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[#8fa670]/10 border border-[#8fa670]/20 rounded-full">
            <span className="text-[#8fa670] text-sm font-medium">
              Tokenomics
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2a2d1f] mb-6">
            $PROP Token Distribution
          </h2>

          <p className="text-xl text-[#5a5d4a] max-w-3xl mx-auto">
            Fair launch with community-first approach. No
            pre-mine, no hidden allocations.
          </p>

        </motion.div>

        {/* Hexagon Infographic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="rounded-2xl overflow-hidden mb-12"
        >
          <TokenomicsHexagon />
        </motion.div>

        {/* Token Utility + Supply */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#f5f5ef] border border-[#8fa670]/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#2a2d1f] mb-4">Token Utility</h3>
            <ul className="space-y-4">
              {[
                { label: "Governance Rights", desc: "Vote on protocol parameters and upgrades", color: "#8fa670" },
                { label: "Revenue Share", desc: "Earn from protocol trading fees and performance", color: "#a8bf88" },
                { label: "Staking Rewards", desc: "Stake tokens to earn additional rewards", color: "#7a9160" },
                { label: "Fee Discounts", desc: "Reduced trading fees for token holders", color: "#6b8250" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${item.color}22` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  </div>
                  <div>
                    <div className="text-[#2a2d1f] font-medium">{item.label}</div>
                    <div className="text-[#5a5d4a] text-sm">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#8fa670]/10 to-[#7a9160]/10 border border-[#8fa670]/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#2a2d1f] mb-1">100,000,000</div>
                  <div className="text-[#5a5d4a] text-sm">Total Supply</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#2a2d1f] mb-1">Fixed</div>
                  <div className="text-[#5a5d4a] text-sm">No Inflation</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#8fa670]/10 to-[#7a9160]/10 border-2 border-[#8fa670] rounded-2xl p-6">
              <p className="text-[#2a2d1f] font-bold mb-1">🎁 Early Supporter Bonus</p>
              <p className="text-[#5a5d4a] text-sm">Part of the presale allocation will be airdropped to early supporters who purchase accounts during presale.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}