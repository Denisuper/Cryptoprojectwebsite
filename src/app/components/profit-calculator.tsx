import { useState } from "react";
import { motion } from "motion/react";
import { Slider } from "./ui/slider";

const accountSizes = [
  { size: 5000, fee: 49 },
  { size: 10000, fee: 89 },
  { size: 25000, fee: 189 },
  { size: 50000, fee: 329 },
  { size: 100000, fee: 599 },
];

export function ProfitCalculator() {
  const [selectedSize, setSelectedSize] = useState(accountSizes[2]);
  const [profitTarget, setProfitTarget] = useState(10); // percentage
  const [numberOfAccounts, setNumberOfAccounts] = useState(1);

  const potentialProfit = (selectedSize.size * profitTarget) / 100;
  const traderShare = potentialProfit * 0.8; // 80% profit split
  const yearlyPayout = traderShare * numberOfAccounts * 12; // 12 months per year
  const monthlyPayout = traderShare * numberOfAccounts;

  return (
    <section className="py-24 bg-white" id="calculator">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2a2d1f] mb-4">Profit Calculator</h2>
          <p className="text-[#5a5d4a]">See how much you can earn based on your trading skill.</p>
        </div>

        <div className="bg-[#f9f9f5] border-2 border-[#8fa670]/30 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <label className="block text-[#2a2d1f] font-bold mb-4">Account Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {accountSizes.map((item) => (
                    <button
                      key={item.size}
                      onClick={() => setSelectedSize(item)}
                      className={`py-2 px-1 rounded-lg border-2 transition-all text-sm font-bold ${
                        selectedSize.size === item.size
                          ? "bg-[#8fa670] border-[#8fa670] text-white shadow-md"
                          : "bg-white border-[#8fa670]/20 text-[#2a2d1f] hover:border-[#8fa670]"
                      }`}
                    >
                      ${item.size.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-[#2a2d1f] font-bold">Profit Target (%)</label>
                  <span className="text-[#8fa670] font-bold">{profitTarget}%</span>
                </div>
                <Slider
                  value={[profitTarget]}
                  onValueChange={(val) => setProfitTarget(val[0])}
                  max={20}
                  step={1}
                  className="py-4"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-[#2a2d1f] font-bold">Number of Accounts</label>
                  <span className="text-[#8fa670] font-bold">{numberOfAccounts}</span>
                </div>
                <Slider
                  value={[numberOfAccounts]}
                  onValueChange={(val) => setNumberOfAccounts(val[0])}
                  min={1}
                  max={10}
                  step={1}
                  className="py-4"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#8fa670]/10 shadow-inner space-y-6">
              <div className="flex justify-between items-center border-b border-[#f5f5ef] pb-4">
                <span className="text-[#5a5d4a]">Challenge Fee</span>
                <span className="text-[#2a2d1f] font-bold">${(selectedSize.fee * numberOfAccounts).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#f5f5ef] pb-4">
                <span className="text-[#5a5d4a]">Total Profit (Per Month)</span>
                <span className="text-[#2a2d1f] font-bold">${potentialProfit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#f5f5ef] pb-4">
                <div className="flex flex-col">
                  <span className="text-[#2a2d1f] font-bold">Monthly Payout</span>
                  <span className="text-[#8fa670] text-sm">80% Profit Split</span>
                </div>
                <span className="text-xl font-bold text-[#8fa670]">
                  ${monthlyPayout.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[#2a2d1f] font-bold text-lg">Yearly Payout</span>
                  <span className="text-[#8fa670] text-sm">80% Profit Split</span>
                </div>
                <span className="text-3xl font-black text-[#8fa670]">
                  ${yearlyPayout.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#8fa670] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#7a9160] transition-colors"
              >
                Start Challenge
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
