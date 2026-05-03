import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { InteractivePieChart } from "../components/interactive-pie-chart";

export function TokenomicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const tokenomics = [
    { label: "Presale", percentage: 45, color: "#8fa670" },
    { label: "Liquidity", percentage: 20, color: "#a8bf88" },
    { label: "Treasury", percentage: 15, color: "#7a9160" },
    { label: "Developers", percentage: 12, color: "#6b8250" },
    { label: "Marketing", percentage: 8, color: "#b8cc9f" },
  ];

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

          <motion.div
            className="mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-[#8fa670]/10 to-[#7a9160]/10 border-2 border-[#8fa670] rounded-lg p-4">
              <p className="text-[#2a2d1f] font-bold mb-1">
                🎁 Early Supporter Bonus
              </p>
              <p className="text-[#5a5d4a]">
                Part of the presale allocation will be
                airdropped to early supporters who purchase
                accounts during presale.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Pie Chart */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#f5f5ef] border border-[#8fa670]/20 rounded-2xl p-8">
              <InteractivePieChart data={tokenomics} />

              <div className="mt-8 space-y-3">
                {tokenomics.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div className="flex flex-col">
                        <span className="text-[#2a2d1f] font-medium">
                          {item.label}
                        </span>
                        {item.label === "Presale" && (
                          <span className="text-xs text-[#5a5d4a]">
                            Includes airdrops to early
                            supporters
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[#5a5d4a]">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Token Utility */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 30 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-[#f5f5ef] border border-[#8fa670]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#2a2d1f] mb-4">
                Token Utility
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8fa670]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#8fa670]"></div>
                  </div>
                  <div>
                    <div className="text-[#2a2d1f] font-medium">
                      Governance Rights
                    </div>
                    <div className="text-[#5a5d4a] text-sm">
                      Vote on protocol parameters and upgrades
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#a8bf88]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#a8bf88]"></div>
                  </div>
                  <div>
                    <div className="text-[#2a2d1f] font-medium">
                      Revenue Share
                    </div>
                    <div className="text-[#5a5d4a] text-sm">
                      Earn from protocol trading fees and
                      performance
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7a9160]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#7a9160]"></div>
                  </div>
                  <div>
                    <div className="text-[#2a2d1f] font-medium">
                      Staking Rewards
                    </div>
                    <div className="text-[#5a5d4a] text-sm">
                      Stake tokens to earn additional rewards
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#6b8250]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#6b8250]"></div>
                  </div>
                  <div>
                    <div className="text-[#2a2d1f] font-medium">
                      Fee Discounts
                    </div>
                    <div className="text-[#5a5d4a] text-sm">
                      Reduced trading fees for token holders
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#8fa670]/10 to-[#7a9160]/10 border border-[#8fa670]/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#2a2d1f] mb-1">
                    100,000,000
                  </div>
                  <div className="text-[#5a5d4a] text-sm">
                    Total Supply
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#2a2d1f] mb-1">
                    Fixed
                  </div>
                  <div className="text-[#5a5d4a] text-sm">
                    No Inflation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}