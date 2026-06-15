import { motion } from "motion/react";
import { marketAssets } from "../data/markets";
import { CryptoIcon } from "./crypto-icon";

export function TickerTape() {
  // Double the data for seamless loop using percentage translation
  const row1 = [...marketAssets, ...marketAssets];
  const row2 = [...marketAssets].reverse();
  const row2Extended = [...row2, ...row2];

  return (
    <div className="w-full overflow-hidden bg-[#f9f9f5] py-4 border-y border-[#8fa670]/20 select-none">
      {/* Row 1: Moving Left */}
      <div className="flex mb-4">
        <motion.div
          className="flex whitespace-nowrap gap-8 pr-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {row1.map((asset, i) => (
            <div key={`row1-${i}`} className="flex items-center gap-2">
              <CryptoIcon symbol={asset.symbol} size={18} />
              <span className="font-bold text-[#2a2d1f]">{asset.symbol}</span>
              <span className="text-[#5a5d4a]">${asset.price.toLocaleString()}</span>
              <span className={`text-xs ${asset.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                {asset.change24h >= 0 ? "+" : ""}{asset.change24h}%
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Moving Right */}
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap gap-8 pr-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {row2Extended.map((asset, i) => (
            <div key={`row2-${i}`} className="flex items-center gap-2">
              <CryptoIcon symbol={asset.symbol} size={18} />
              <span className="font-bold text-[#2a2d1f]">{asset.symbol}</span>
              <span className="text-[#5a5d4a]">${asset.price.toLocaleString()}</span>
              <span className={`text-xs ${asset.change24h >= 0 ? "text-green-600" : "text-red-600"}`}>
                {asset.change24h >= 0 ? "+" : ""}{asset.change24h}%
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
