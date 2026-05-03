import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { motion } from "motion/react";
import { Check, Zap, TrendingUp, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BuyWidget } from "thirdweb/react";
import { createThirdwebClient, defineChain } from "thirdweb";
import { PageTransition } from "../components/page-transition";

const client = createThirdwebClient({
  clientId: "030c01020ac09244713cccdef3c2c5fa",
});

export function GetFundedPage() {
  const [selectedTier, setSelectedTier] = useState<
    "10k" | "25k" | "50k" | "100k"
  >("10k");
  const navigate = useNavigate();

  const scrollToFAQ = () => {
    navigate("/");
    // Wait for navigation to complete, then scroll
    setTimeout(() => {
      const element = document.getElementById("faq");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const steps = [
    {
      icon: Zap,
      title: "Choose Your Plan",
      description:
        "Select the capital amount that fits your trading style.",
    },
    {
      icon: Shield,
      title: "Pass Evaluation",
      description:
        "Trade with simulated capital and prove your skills.",
    },
    {
      icon: TrendingUp,
      title: "Get Funded & Earn",
      description:
        "Start trading and earning real crypto payouts instantly.",
    },
  ];

  const challengeConfig = {
    "10k": { name: "PropDAO $10k Challenge", amount: "39" },
    "25k": { name: "PropDAO $25k Challenge", amount: "89" },
    "50k": { name: "PropDAO $50k Challenge", amount: "159" },
    "100k": { name: "PropDAO $100k Challenge", amount: "299" },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>
            Get Funded - PropDAO Prop Trading Challenges
          </title>
          <meta
            name="description"
            content="Choose your trading challenge and get funded with PropDAO. Pick from $10k to $100k capital, pass our evaluation, and start earning real crypto payouts. No KYC required, built on Arbitrum."
          />
          <meta
            name="keywords"
            content="get funded, prop trading challenge, trading evaluation, funded trader account, crypto trading capital, PropDAO challenges, decentralized prop firm"
          />

          <meta
            property="og:title"
            content="Get Funded - PropDAO Prop Trading Challenges"
          />
          <meta
            property="og:description"
            content="Choose your trading challenge and get funded with PropDAO. Pick from $10k to $100k capital and start earning real crypto payouts."
          />

          <meta
            name="twitter:title"
            content="Get Funded - PropDAO Prop Trading Challenges"
          />
          <meta
            name="twitter:description"
            content="Choose your trading challenge and get funded with PropDAO. Pick from $10k to $100k capital and start earning real crypto payouts."
          />

          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.propdao.finance/get-funded"
          />
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
              Get Funded Today
            </motion.h1>

            <motion.p
              className="text-xl text-[#5a5d4a] mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Choose your plan, connect your wallet, and start
              your journey to becoming a funded trader. No KYC
              required.
            </motion.p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#2a2d1f] mb-12">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8fa670] to-[#6b8250] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon
                      className="text-white"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2a2d1f] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#5a5d4a]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-gradient-to-b from-white to-[#f9f9f5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#2a2d1f] mb-8">
              Choose Your Challenge
            </h2>

            {/* Challenge Type Selector */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button className="px-8 py-3 bg-[#8fa670] text-white rounded-lg font-semibold cursor-default">
                1 Step Challenge
              </button>
            </motion.div>

            {/* Tier Selector */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {(["10k", "25k", "50k", "100k"] as const).map(
                (tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                      selectedTier === tier
                        ? "bg-[#8fa670] text-white shadow-lg"
                        : "bg-white border-2 border-[#8fa670] text-[#2a2d1f] hover:bg-[#f5f5ef]"
                    }`}
                  >
                    ${tier.toUpperCase()}
                  </button>
                ),
              )}
            </motion.div>

            {/* Challenge Widget */}
            <motion.div
              key={selectedTier}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Challenge Title */}
              <h3 className="text-2xl font-bold text-[#2a2d1f] mb-6 text-center">
                {challengeConfig[selectedTier].name}
              </h3>

              {/* Token Rewards Info Box */}
              <div className="w-full max-w-md mb-4 bg-gradient-to-br from-[#8fa670]/10 to-[#7a9160]/10 border-2 border-[#8fa670] rounded-lg p-4">
                <p className="text-[#2a2d1f] font-bold mb-2 text-center">
                  🎁 Bonus Tokens Included!
                </p>
                <div className="text-sm text-[#5a5d4a] space-y-1">
                  <p className="text-center mb-2">
                    Every account purchase grants:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div
                      className={`p-2 rounded ${selectedTier === "10k" ? "bg-[#8fa670] text-white font-bold" : ""}`}
                    >
                      <span className="font-semibold">
                        $10k →
                      </span>{" "}
                      1,000 $PROP
                    </div>
                    <div
                      className={`p-2 rounded ${selectedTier === "25k" ? "bg-[#8fa670] text-white font-bold" : ""}`}
                    >
                      <span className="font-semibold">
                        $25k →
                      </span>{" "}
                      2,500 $PROP
                    </div>
                    <div
                      className={`p-2 rounded ${selectedTier === "50k" ? "bg-[#8fa670] text-white font-bold" : ""}`}
                    >
                      <span className="font-semibold">
                        $50k →
                      </span>{" "}
                      5,000 $PROP
                    </div>
                    <div
                      className={`p-2 rounded ${selectedTier === "100k" ? "bg-[#8fa670] text-white font-bold" : ""}`}
                    >
                      <span className="font-semibold">
                        $100k →
                      </span>{" "}
                      10,000 $PROP
                    </div>
                  </div>
                  <p className="text-center mt-3 font-semibold text-[#2a2d1f]">
                    ⚠️ Limited to first 1,000 account buyers
                    only!
                  </p>
                </div>
              </div>

              {/* Widget Container */}
              <div className="w-full max-w-md bg-white border border-[#8fa670]/20 rounded-2xl overflow-hidden shadow-lg p-6">
                <BuyWidget
                  theme={"light"}
                  client={client}
                  description={
                    "10% Profit Target | 8% Max Drawdown | 5 Minimum Trading Days | Minimum 0.5% Daily Gain | No Consistency Rules"
                  }
                  name={challengeConfig[selectedTier].name}
                  paymentMethods={["crypto"]}
                  currency={"USD"}
                  chain={defineChain(42161)}
                  showThirdwebBranding={false}
                  amount={challengeConfig[selectedTier].amount}
                  tokenAddress={
                    "0xaf88d065e77c8cC2239327C5EDb3A432268e5831"
                  }
                  receiverAddress={
                    "0xc7d0a979d55aCAA233370017d4087b5C4e9B01Db"
                  }
                  buttonLabel={"Preorder Now"}
                  amountEditable={false}
                  tokenEditable={false}
                />
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <div className="bg-[#f9f9f5] border border-[#8fa670]/20 rounded-lg py-8 px-8 max-w-2xl mx-auto">
                <p className="text-[#2a2d1f] text-xl mb-4">
                  <strong className="text-2xl">
                    Please Note:
                  </strong>
                </p>
                <p className="text-[#5a5d4a] text-lg mb-3">
                  Accounts are for presale and will not be
                  available until protocol launch.
                </p>
                <p className="text-[#5a5d4a] text-lg">
                  Only one active account will be available per
                  wallet address.
                </p>
              </div>
            </motion.div>

            {/* Airdrop Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-center"
            >
              <div className="bg-gradient-to-br from-[#8fa670]/10 to-[#7a9160]/10 border-2 border-[#8fa670] rounded-lg py-8 px-8 max-w-2xl mx-auto">
                <p className="text-[#2a2d1f] text-xl font-bold mb-3">
                  🎁 Token Airdrop for Early Supporters
                </p>
                <p className="text-[#5a5d4a] text-lg">
                  Anybody that purchases accounts during presale
                  will have $PROP tokens airdropped to them at
                  launch.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#f9f9f5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#2a2d1f] mb-4">
              Questions About Getting Funded?
            </h2>
            <p className="text-lg text-[#5a5d4a] mb-8">
              Check out our FAQ section or reach out to our
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-[#8fa670] text-[#2a2d1f] hover:bg-[#f5f5ef] transition-all duration-300 ease-in-out hover:scale-105"
                onClick={scrollToFAQ}
              >
                View FAQ
              </Button>
              <Link to="/contact">
                <Button className="bg-[#8fa670] hover:bg-[#7a9160] text-white transition-all duration-300 ease-in-out hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}