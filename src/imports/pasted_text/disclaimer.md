DISCLAIMER
IF YOU HAVE ANY DOUBTS AS TO WHAT ACTIONS YOU SHOULD TAKE, WE RECOMMEND THAT YOU CONSULT WITH YOUR LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR(S). No part of this Whitepaper is to be reproduced, distributed or disseminated without including this section. The sole purpose of this Whitepaper is to present tokens to potential token holders. The information is provided for INFORMATIONAL PURPOSES only. 

It may not be exhaustive and doesn’t imply any elements of a contractual relationship or obligations. Despite the fact that we make every effort to ensure the accuracy, up to date and relevance of any material in this Whitepaper, this document and materials contained herein are not professional advice and in no way constitutes the provision of professional advice of any kind. 

Further, Project reserves the right to modify or update this Whitepaper and information contained herein, at any moment and without notice. To the maximum extent permitted by any applicable laws, regulations and rules, project doesn’t guarantee and doesn’t accept legal responsibility of any nature, for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising from or related to the accuracy, reliability, relevance or completeness of any material contained in this Whitepaper.

 Further, project does not make or purport to make, and hereby disclaims, any representation, warranty or undertaking in any form whatsoever to any entity, person, or authority, including any representation, warranty or undertaking in relation to the truth, accuracy and completeness of any of the information set out in this Whitepaper. 

You should contact relevant independent professional advisors before relying or making any commitments or transactions based on the material published in this Whitepaper. You don’t have the right and shouldn’t buy tokens if you are a citizen or resident (tax or otherwise) of any country or territory where transactions with digital tokens and/or digital currencies are prohibited or in any other manner restricted by applicable laws. (“Person” is generally defined as a natural person residing in the relevant state or any entity organized or incorporated under the laws of the relevant state). 

PROP tokens are not and will not be intended to constitute securities, digital currency, commodity, or any other kind of financial instrument and have not been registered under relevant securities regulations, including the securities laws of any jurisdiction in which a potential token holder is a resident. 
This Whitepaper is not a prospectus or a proposal, and its purpose is not to serve as a securities offer or request for investments in the form of securities in any jurisdiction. However, in spite of the above, legislation of certain jurisdictions may, now or in future, recognize PROP tokens as securities. 

Project does not accept any liability for such recognition and/or any legal and other consequences of such recognition for potential owners of PROP tokens, nor provide any opinions or advice regarding the acquisition, sale or other operations with PROP tokens, and the fact of the provision of this Whitepaper doesn’t form the basis or should not be relied upon in matters related to the conclusion of contracts or acceptance investment decisions. 

Regulatory Considerations 
This whitepaper on the PropDao Protocol and PROP token is for informational purposes and may not be comprehensive. Laws and regulations regarding blockchain technologies and tokens can vary greatly by jurisdiction. Potential participants should seek legal advice in their respective regions.  

PropDao  is committed to operating in full compliance with all applicable laws and regulations, striving to secure any necessary licences and approvals. However, it cannot be guaranteed, nor does anyone provide representations, warranties, or assurances, that such licences or approvals will be obtained within a specific timeframe or at all. Additionally, as laws and regulations are subject to change, PropDao cannot guarantee, represent, or warrant that it will be able to obtain any necessary licences or approvals that may be required in the future. As a result, PropDao may need to adjust the Ecosystem Support initiatives and other activities outlined in this white paper, which could mean that certain services may not be available in all or specific jurisdictions, or may not be available at all. 

No financial or investment advice 
This document is neither an offer to sell nor a solicitation to buy any tokens. It is not intended as financial, legal, or investment advice. Readers should consult professional advisors before making any investment decisions related to the PropDao.
Statements in this whitepaper about future expectations or predictions are subject to risks and uncertainties and may differ materially from actual future events or results. Information in this whitepaper is provided "as is" without any warranty. While believed to be accurate, it may contain errors and is subject to change without notice. 



Third Party Data
This white paper may include data and references from third-party sources. While management believes this information is accurate and reliable, it has not undergone independent audit, verification, or analysis by professional legal, accounting, engineering, or financial advisors. 

Not a sale of security 
This whitepaper does not constitute a prospectus or financial service offering document and is not an offer to sell or solicitation of an offer to buy any security, investment products, regulated products or financial instruments in any jurisdiction. 

Reader Acknowledgement 
By accessing this whitepaper, readers acknowledge understanding and accepting these disclaimers and agree that any involvement with the PropDao is at their own risk. Purchasing PropDao-supported tokens or interacting with PropDao-supported applications or protocols carries significant risks and may result in the loss of a substantial or entire amount of the money involved. Before purchasing PropDao-supported tokens or engaging with PropDao-supported applications or protocols, you should carefully evaluate and consider the risks, including those detailed in any accompanying documentation. Tokens should not be purchased for speculative or investment purposes. Purchasers should only acquire PropDao-supported tokens if they fully understand the nature of these tokens and accept the inherent risks associated with them, their applications and protocols, and the PropDao network itself. 

Caution Regarding Forward-Looking Statements 
This white paper contains forward-looking statements about our business, based on the beliefs of PropDao and certain assumptions and information available to us. We do not make any statements regarding the conduct or operations of third parties whose actions (including commercial activities) may impact the PropDao network. Forward-looking statements are inherently subject to significant risks and uncertainties. They may involve estimates and assumptions and are influenced by factors beyond our control and prediction. Consequently, these factors could cause actual results or outcomes to differ materially from those expressed in the forward-looking statements. Any forward-looking statement is valid only as of the date it is made, and we have no obligation to update any forward-looking statements to reflect events or circumstances occurring after that date or to account for unanticipated events

Table of Contents
Abstract
Introduction
What is a Prop Firm?
3.1 Evaluation / Challenge Phase
3.2 Funded Phase
3.3 Common Problems and Drawback
Solution / Mechanics
4.1 Core Architecture
4.2 Simulated Token Mechanics
4.3 Account Management
4.4 Challenge Entry & Simulated Capital Assignment
4.5 Position Mechanics
4.6 Automated Rule Enforcement & Evaluation
4.7 Pass → Funded Transition
4.8 Reset Mechanism
4.9 Real Crypto Payouts
Governance & Upgrades
Tokenomics
Roadmap















1.  Abstract
This white paper introduces PropDao, a decentralized trading protocol that allows for simulated trading with real rewards. Fully EVM-compatible, PropDao is powered by the $PROP token, enabling seamless transactions, decentralized services, and on-chain operations. The platform features PropDao protocol, a decentralized prop firm model offering the low risk of a prop firm and the decentralization of crypto.





























2. Introduction
In a world where talented traders are unable to trade due to geographic restrictions, limited personal capital, and unfair centralized systems, PropDao delivers the first truly decentralized proprietary trading platform on Arbitrum.
Traders pay a small crypto fee to enter simulated challenges using virtual capital, minimizing personal risk. Smart contracts enforce transparent rules, removing bias, manual reviews, and disputes. Passing unlocks simulated funded accounts with real crypto rewards paid instantly from protocol revenue.
Built on Arbitrum's low-fee and high-speed Layer 2 blockchain, this decentralized ecosystem removes gatekeepers, opens capital access, and rewards skill over luck, redefining prop trading for the DeFi era.













3. What is a Prop Firm?
A proprietary trading firm or a prop firm is a company that allocates simulated capital to traders in exchange for an evaluation fee, allowing them to trade financial markets such as forex, futures, stocks, commodities, or cryptocurrencies.
How the Prop Firm Model Works:

3.1 Evaluation / Challenge Phase:
Traders pay a one-time or recurring fee typically $100–$600, depending on the simulated account size (e.g., $10K to $200K virtual capital.)
They trade in a simulated environment under strict rules.
Key requirements include:
Achieving a profit target, usually 8-10%.
Staying within drawdown limits  usually 2–3% maximum daily drawdown, 4–6% overall.
Meeting consistency rules, for example no single trade greater than 30–50% of profits.
Completing the phase within time limits or with minimum activity for example minimum 5 trading days with 0.5% profit.
3.2 Funded Phase
Upon passing, traders gain access to a "funded" account, often still simulated in many firms.
Traders continue trading under similar rules.
Losses are absorbed by the firm, trader's downside is limited to the initial evaluation fee.
Traders are able to access payouts every 2 weeks to withdraw profits.

This model has attracted millions of retail traders by promising access to large capital without personal risk beyond the fee, but still has many flaws.

3.3 Common Problems and Drawbacks with the Centralized Prop Firm Model
While the concept is appealing, centralized prop firms suffer from structural issues such as:

Opaque & Manipulable Rules:
Retroactive rule changes like tightening drawdown limits, banning strategies mid-challenge, or altering payout terms after success.
Arbitrary enforcement or hidden restrictions like news trading bans or weekend holding fees.
Payout Problems:
Delayed, denied, or reduced payouts due to various excuses.
Firms vanishing and denying millions in payouts due to bankruptcy.
Payout Problems:
Lack of verifiable transparency, as traders can't audit performance tracking, pricing feeds, or rule enforcement.
Single points of failure: manual oversight leads to bias, disputes, or scams.















4. The Solution
PropDao delivers a completely new, unique approach by creating a fully decentralized, on-chain platform built natively on the Arbitrum ecosystem. Every stage of the process uses smart contracts only, ensuring there is no human bias.
Anyone with a wallet can join simulated evaluation challenges by paying a small crypto fee. This unlocks an account fed by real-time market data from Arbitrum oracles and replicas of decentralized exchanges. All performance criteria such as profit targets, maximum and daily drawdown limits, consistency requirements, minimum trading days, and verifiable prohibitions on certain strategies are strictly enforced through smart contracts.

4.1 Core Architecture
The protocol consists of two main smart contracts:
SimUSDC (an ERC-20 token contract): Represents all simulated capital across the platform, minted upon challenge entry.
PropFirmProtocol (the main logic contract): Handles accounts, challenges, positions, rules, and payouts.








4.2 Simulated Token Mechanics (sUSDC)
All capital in the system is virtual and represented by a single ERC-20 simulated token called sUSDC. The token holds no real world value, is non-transferable, and only usable in the protocol. Upon passing the challenge all sUSDC is burned and a different token called fUSDC is minted into the wallet.
Minting and burning are restricted to the PropDaoProtocol contract.
On challenge entry or funded upgrade, the protocol mints sUSDC/fUSDC directly to the trader’s wallet.
On position open, the equivalent of sUSDC/fUSDC is burned as collateral.
The sum of sUSDC/fUSDC and open positions in the protocol is calculated every minute to keep track of account breaches.
On position close, sUSDC/fUSDC is reminted to reflect profit or loss. 
Only fUSDC can be redeemed for rewards.

4.3 Account Management
To simplify logic, the protocol strictly enforces one active account per wallet address.
You can purchase multiple accounts, but attempting to activate a new challenge while an account is active reverts with “Only one active account per wallet allowed.” You will only be able to activate another account on that wallet if the challenge ends up breaching rules.
You are able to purchase multiple accounts on one wallet, but only one is allowed to be activated.
Traders who want multiple accounts simply use separate wallets.



4.4 Challenge Entry & Simulated Capital Assignment
Trader pays the entry fee (ETH or USDC) via the protocol contract.
The contract checks that no active account exists on the wallet.
It assigns a tier-specific amount of simulated capital (e.g., $10K, $50K, $100K) and immediately mints that exact amount of sUSDC to the trader’s wallet.
4.5 Position Mechanics
When opening a position:
Trader selects the trading pair, direction, size, and optional stop/take-profit.
The protocol calculates required collateral based on size.
Trader must approve and burn that exact amount of sUSDC from their wallet.
The position exists only inside the protocol and is visible via the dApp dashboard.
While open, unrealized P/L is calculated live using oracle prices and factored into total equity for drawdown and rule checks.
When closing (manual or auto):
Contract fetches latest oracle price.
Calculates final P/L.
Remints sUSDC to the wallet: original collateral + profit/loss.
Position record is cleared.
Updated equity feeds back into all rule checks.





4.6 Automated Rule Enforcement & Evaluation
All rules are hardcoded in the contract and checked on every trade close and periodic mark-to-market:
Profit target.
Daily and maximum drawdown limits.
Consistency rules.
Minimum trading days.

4.7 Pass → Funded Transition
When all criteria are met:
Contract automatically burns any remaining challenge-phase sUSDC.
Mints a different token called fUSDC.
Trader continues trading with the new simulated balance.

4.8 Reset Mechanism
On breach, traders can pay a discounted reset fee. The contract:
Collects the fee.
Burns current sUSDC.
Re-mints the original starting amount.
Resets all metrics and reactivates the account.



4.9 Real Crypto Payouts
Payouts are real tokens (USDC, ETH, governance token) and come from protocol revenue:
Trader requests payout from the funded account.
The contract calculates their share (80–90%), based on what the trader selected in the beginning.
Instantly transfers real tokens from the treasury. Revenue sources: entry fees, reset fees, and small retained performance share.

5. Governance & Upgrades
The DAO will control:
Rule thresholds.
Fee structures.
New asset additions.
Treasury spending.








6. Tokenomics
The total supply of the PROP token is fixed at 100,000,000 tokens — there is no minting after the initial creation, and no ongoing inflation mechanism.

















Token distribution:
Presale - 45% of total tokens will be set aside for the presale
Liquidity - 20% of tokens will be used for liquidity
Treasury - 15% of tokens will be used to issue payouts
Developers - 12% of tokens will be used to fund developers for the project
Marketing - 8% of tokens will be used by the marketing team

6.1 Fee Structure
Each transaction executed within the ecosystem will incur a 1% protocol fee. Instead of being redistributed or stored in a treasury, this fee will be sent to a burn address, effectively removing the tokens from the circulating supply permanently.


7. Roadmap
Phase 1: Foundation & Testnet (Q2-Q3 2026 )
Smart contract development
Internal testing + security audit

Phase 2: Audit, Token & Mainnet Launch (Q4 2026-Q1 2027)
Smart contracts completed
Second full smart contract audit 
PROP token contract deployed 
Liquidity pool creation
Full mainnet deployment
Governance contracts live

Phase 3: Growth & Optimization (Q1-Q2 2027)
UI/UX upgrades + mobile responsiveness
First major marketing campaign + exchange listings (if applicable)

Phase 4: Maturity & Innovation (Q3 2027 onward)
Full DAO autonomy
Global adoption push with localized communities and translations









