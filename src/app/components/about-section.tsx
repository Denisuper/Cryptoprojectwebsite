import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import aboutImage from "figma:asset/eb462b1edc0ffa33c4135605c9da7dfbd14db4ec.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[#8fa670]/10 border border-[#8fa670]/20 rounded-full">
            <span className="text-[#8fa670] text-sm font-medium">About us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a2d1f] mb-6">
            Transforming the Future of Prop firms
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-[#5a5d4a] mb-6">
              The PropDAO is redefining proprietary trading by bringing the industry on-chain. We eliminate 
              centralized gatekeepers, geographic barriers, and trust dependencies through immutable smart 
              contracts and fully simulated virtual capital on Arbitrum.
            </p>
            
            <p className="text-lg text-[#5a5d4a] mb-8">
              Our mission is simple: empower traders worldwide to prove their skill in a fair, transparent, 
              and permissionless environment — where merit alone determines success and rewards are instant, 
              verifiable, and real.
            </p>

            <div className="bg-[#f5f5ef] border border-[#8fa670]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#2a2d1f] mb-4">Industry Size</h3>
              <p className="text-[#5a5d4a] mb-6">
                The proprietary trading industry is a $10–20 billion global market. FTMO, the category 
                leader, reportedly generated $325 million in revenue in 2025 alone.
              </p>
              
              <h3 className="text-2xl font-bold text-[#2a2d1f] mb-4">Potential</h3>
              <p className="text-[#5a5d4a]">
                In a $10–20B industry still growing rapidly, a trustless, global, on-chain alternative has 
                the ability to capture significant share — especially as DeFi adoption accelerates and 
                traders demand transparency and fairness.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8fa670]/20 to-[#7a9160]/20 rounded-2xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-[#8fa670]/20">
              <ImageWithFallback
                src={aboutImage}
                alt="Trading Charts"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}