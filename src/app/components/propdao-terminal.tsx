import { motion } from "motion/react";
import logo from "figma:asset/005df1f965f8a32d07a0bcc0c23a7079e8988399.png";

export function PropDAOTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto mt-12 bg-[#2a2d1f] rounded-xl p-4 shadow-2xl border border-[#8fa670]/30 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8fa670] to-[#a8bf88]"></div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex-shrink-0 bg-black rounded-lg p-1 border border-[#8fa670]/20">
          <img
            src={logo}
            alt="PropDAO Terminal Logo"
            className="w-full h-full object-contain brightness-0 invert"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[#8fa670] font-mono text-sm font-bold uppercase tracking-wider">
              PropDAO Terminal
            </span>
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          </div>
          <h3 className="text-white font-bold text-lg leading-tight">
            Built on Arbitrum. Powered by PropDAO.
          </h3>
        </div>
      </div>

      <div className="mt-4 font-mono text-[10px] text-[#8fa670]/60 space-y-1">
        <p>&gt; Initializing secure connection to Arbitrum One...</p>
        <p>&gt; Authentication successful. Welcome to the Terminal.</p>
        <p>&gt; Data feed: Active | Latency: 12ms</p>
      </div>
    </motion.div>
  );
}
