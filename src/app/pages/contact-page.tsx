import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "motion/react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Helmet } from "react-helmet-async";
import { PageTransition } from "../components/page-transition";

export function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Contact Us - PropDAO Support</title>
          <meta name="description" content="Get in touch with the PropDAO team. Have questions about our decentralized prop trading platform? Reach out via email or join our community on X (Twitter) and Discord." />
          <meta name="keywords" content="PropDAO contact, support, help, prop trading support, DeFi help, customer service, PropDAO team" />

          <meta property="og:title" content="Contact Us - PropDAO Support" />
          <meta property="og:description" content="Get in touch with the PropDAO team. Have questions about our decentralized prop trading platform? Reach out and we'll help you." />

          <meta name="twitter:title" content="Contact Us - PropDAO Support" />
          <meta name="twitter:description" content="Get in touch with the PropDAO team. Have questions about our decentralized prop trading platform? Reach out and we'll help you." />

          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.propdao.finance/contact" />
        </Helmet>

        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-[#f9f9f5] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-[#2a2d1f] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get in Touch
            </motion.h1>
            
            <motion.p 
              className="text-xl text-[#5a5d4a] mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tally Form Embed - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#f9f9f5] border border-[#8fa670]/20 rounded-2xl overflow-hidden relative">
                <h2 className="text-2xl font-bold text-[#2a2d1f] mb-4 px-8 pt-8">Send us a Message</h2>
                
                {/* Custom CSS to style Tally form and hide logo */}
                <style>{`
                  .tally-container iframe {
                    background: #f9f9f5 !important;
                  }
                  /* Hide Tally branding */
                  .tally-container::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 60px;
                    background: #f9f9f5;
                    z-index: 10;
                  }
                `}</style>
                
                <div className="tally-container relative" style={{ minHeight: '900px' }}>
                  <iframe
                    src="https://tally.so/embed/VLYQG6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    width="100%"
                    height="900"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Contact Form"
                    style={{ border: 0, background: '#f9f9f5' }}
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}