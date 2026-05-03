import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f9f5] to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8fa670] via-[#7a9160] to-[#6b8250]"></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

          <div className="relative z-10 py-20 px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Trading?
            </h2>
            
            <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
              Join thousands of traders already earning with PropDAO. No barriers, no gatekeepers, just pure decentralized trading.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-funded">
                <Button size="lg" className="bg-white text-[#2a2d1f] hover:bg-gray-100 text-lg px-8">
                  Get Funded
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/whitepaper">
                <Button size="lg" variant="outline" className="border-white/30 text-[#2a2d1f] bg-white/95 hover:bg-white text-lg px-8">
                  Read Whitepaper
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}