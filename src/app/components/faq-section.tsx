import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "Is the trading real or simulated?",
      answer: "All trading on PropDAO is simulated. You trade with virtual capital in a fully on-chain environment that mirrors real market conditions. Your profits are real crypto payouts based on your simulated trading performance."
    },
    {
      question: "How do I get paid if everything is simulated?",
      answer: "When you achieve profit targets in our simulated challenges, you earn real crypto rewards instantly through smart contracts. The payouts come from the protocol treasury and are sent directly to your wallet — no manual approvals, no delays."
    },
    {
      question: "What happens if I breach a rule?",
      answer: "Rule breaches are automatically enforced by smart contracts. If you violate a trading rule (like exceeding max drawdown), your challenge account is immediately closed. All rules are transparent, immutable, and applied fairly to everyone."
    },
    {
      question: "How secure is the platform?",
      answer: "PropDAO is built on Arbitrum with fully audited smart contracts. All logic is on-chain and verifiable. We use battle-tested DeFi primitives and have undergone multiple security audits to ensure your funds and trades are protected."
    },
    {
      question: "Do I need to hold PROP tokens?",
      answer: "You don't need PROP tokens to trade, but holding them gives you governance rights to vote on protocol parameters, fee structures, and upgrades. Token holders also earn revenue share from platform trading fees."
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#f9f9f5]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[#8fa670]/10 border border-[#8fa670]/20 rounded-full">
            <span className="text-[#8fa670] text-sm font-medium">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a2d1f] mb-6">
            Have any Questions?
          </h2>
          
          <p className="text-xl text-[#5a5d4a]">
            Find the answers here.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-[#8fa670]/20 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#f5f5ef] transition-colors"
              >
                <span className="text-lg font-semibold text-[#2a2d1f] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className="text-[#8fa670] flex-shrink-0"
                    size={24}
                  />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-[#5a5d4a] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}