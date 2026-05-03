import { Zap, Shield, Users, Vote } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Our platform issues payouts as soon as traders request them.",
      gradient: "from-[#8fa670] to-[#7a9160]",
    },
    {
      icon: Shield,
      title: "No KYC",
      description: "Anyone with a wallet can join and trade, no borders, no ID checks.",
      gradient: "from-[#a8bf88] to-[#8fa670]",
    },
    {
      icon: Vote,
      title: "Trader-First Governance",
      description: "PROP holders directly vote on drawdown limits, profit splits, reset fees, new pairs — the people using the platform control how it evolves.",
      gradient: "from-[#8fa670] to-[#6b8250]",
    },
    {
      icon: Users,
      title: "Built Differently",
      description: "A fully decentralized, simulated prop platform on Arbitrum. TradeLocker gave traders better tools within a centralized system; we go further.",
      gradient: "from-[#6b8250] to-[#8fa670]",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-[#f9f9f5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a2d1f] mb-6">
            What makes us different
          </h2>
          
          <p className="text-xl text-[#5a5d4a] max-w-3xl mx-auto">
            Our Platform: Built Differently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#8fa670]/20 rounded-2xl p-8 hover:shadow-lg hover:shadow-[#8fa670]/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-[#2a2d1f] mb-3">{feature.title}</h3>
              <p className="text-[#5a5d4a]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}