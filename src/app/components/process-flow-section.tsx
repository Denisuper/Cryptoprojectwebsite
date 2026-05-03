import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import processFlowImage from "figma:asset/b35384348695aeeb4ec76334519b4d939031435e.png";

export function ProcessFlowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#2a2d1f] mb-4">
            How PropDAO Works
          </h2>
          <p className="text-lg text-[#5a5d4a] max-w-2xl mx-auto">
            A simple, transparent process from start to payout
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#8fa670]/20 border border-[#8fa670]/10"
        >
          {/* Gradient background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8fa670]/5 to-[#7a9160]/5 blur-2xl"></div>
          
          <motion.img
            src={processFlowImage}
            alt="PropDAO Process Flow: Pay Fee, Mint sUSDC, Trade, Pass, Burn & Get Real Payout"
            className="w-full h-auto relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(143, 166, 112, 0.3), transparent)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Additional info cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="bg-[#f5f5ef] border border-[#8fa670]/20 rounded-2xl p-6 text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-[#8fa670] mb-2">5 Steps</div>
            <p className="text-[#5a5d4a]">Simple process to start earning</p>
          </motion.div>

          <motion.div
            className="bg-[#f5f5ef] border border-[#8fa670]/20 rounded-2xl p-6 text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-[#8fa670] mb-2">100% On-Chain</div>
            <p className="text-[#5a5d4a]">Fully transparent and verifiable</p>
          </motion.div>

          <motion.div
            className="bg-[#f5f5ef] border border-[#8fa670]/20 rounded-2xl p-6 text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-[#8fa670] mb-2">Instant</div>
            <p className="text-[#5a5d4a]">Real crypto payouts on completion</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
