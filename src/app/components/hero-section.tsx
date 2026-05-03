import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { Link } from "react-router";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8e8dc]/30 via-white to-[#d8d8cc]/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-[#2a2d1f] mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock Capital.
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Prove Skill.
          </motion.span>
          <br />
          <motion.span 
            className="bg-gradient-to-r from-[#8fa670] to-[#a8bf88] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Earn Real Rewards.
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-[#5a5d4a] mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          The first fully decentralized prop trading platform on Arbitrum — simulated challenges, 
          immutable rules, instant crypto payouts. No KYC. No personal risk.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link to="/get-funded">
            <Button size="lg" className="bg-[#8fa670] hover:bg-[#7a9160] text-white text-lg px-8">
              Get Funded
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link to="/whitepaper">
            <Button size="lg" variant="outline" className="border-[#8fa670] text-[#2a2d1f] hover:bg-[#f5f5ef] text-lg px-8">
              Read Whitepaper
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-[#f5f5ef]/70 backdrop-blur-sm border border-[#8fa670]/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#2a2d1f] mb-1">No KYC</div>
            <div className="text-[#5a5d4a]">Trade Freely</div>
          </div>
          
          <div className="bg-[#f5f5ef]/70 backdrop-blur-sm border border-[#8fa670]/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#2a2d1f] mb-1">Instant</div>
            <div className="text-[#5a5d4a]">Crypto Payouts</div>
          </div>
          
          <div className="bg-[#f5f5ef]/70 backdrop-blur-sm border border-[#8fa670]/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#2a2d1f] mb-1">On Arbitrum</div>
            <div className="text-[#5a5d4a]">Fully Decentralized</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}