import { motion } from "motion/react";
import logo from "figma:asset/005df1f965f8a32d07a0bcc0c23a7079e8988399.png";

export function PropDAOTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto mt-12 bg-[#2a2d1f] rounded-xl p-6 shadow-2xl border border-[#8fa670]/30 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8fa670] to-[#a8bf88]"></div>

      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className="w-12 h-12 flex-shrink-0 bg-black rounded-lg p-1 border border-[#8fa670]/20"
          initial={{ boxShadow: "0 0 0px rgba(143, 166, 112, 0)" }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(143, 166, 112, 0)",
              "0 0 20px rgba(143, 166, 112, 0.5)",
              "0 0 0px rgba(143, 166, 112, 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img
            src={logo}
            alt="PropDAO Terminal Logo"
            className="w-full h-full object-contain brightness-0 invert"
          />
        </motion.div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[#8fa670] font-mono text-sm font-bold uppercase tracking-wider">
              PropDAO Terminal
            </span>
            <motion.span 
              className="flex h-2 w-2 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.span>
          </div>
          <h3 className="text-white font-bold text-lg leading-tight">
            Built on Arbitrum. Powered by PropDAO.
          </h3>
        </div>
      </div>

      {/* Animated stats display */}
      <div className="grid grid-cols-3 gap-4">
        <motion.div 
          className="bg-[#8fa670]/5 border border-[#8fa670]/20 rounded-lg p-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-[#8fa670]/60 text-xs mb-2">Network</p>
          <p className="text-white font-bold">Arbitrum One</p>
        </motion.div>
        
        <motion.div 
          className="bg-[#8fa670]/5 border border-[#8fa670]/20 rounded-lg p-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-[#8fa670]/60 text-xs mb-2">Status</p>
          <p className="text-green-500 font-bold">Active</p>
        </motion.div>
        
        <motion.div 
          className="bg-[#8fa670]/5 border border-[#8fa670]/20 rounded-lg p-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-[#8fa670]/60 text-xs mb-2">Latency</p>
          <motion.p 
            className="text-white font-bold"
            animate={{ color: ["#ffffff", "#8fa670", "#ffffff"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            12ms
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
