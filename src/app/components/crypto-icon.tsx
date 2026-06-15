import { useState } from "react";

// CoinMarketCap coin IDs — used to pull logos from their CDN
const CMC_IDS: Record<string, number> = {
  BTC:     1,
  ETH:     1027,
  BNB:     1839,
  XRP:     52,
  SOL:     5426,
  ADA:     2010,
  DOGE:    74,
  AVAX:    5805,
  DOT:     6636,
  LINK:    1975,
  MATIC:   3890,
  POL:     3890,
  UNI:     7083,
  ATOM:    3794,
  LTC:     2,
  NEAR:    6535,
  ARB:     11841,
  OP:      11840,
  INJ:     7226,
  SUI:     20947,
  APT:     21794,
  TIA:     22861,
  WIF:     28752,
  PEPE:    24478,
  SHIB:    5994,
  FLOKI:   10804,
  BONK:    23095,
  TRUMP:   35336,
  VIRTUAL: 28301,
  AI16Z:   28177,
  GOAT:    33668,
  FIL:     2280,
  AAVE:    7278,
  CRV:     6538,
  MKR:     1518,
  SNX:     2586,
  COMP:    5692,
  YFI:     5864,
  SUSHI:   6758,
  GRT:     6719,
  LDO:     8000,
  RPL:     2943,
  FXS:     6953,
  GMX:     11857,
  DYDX:    11156,
  PERP:    9178,
  ZRX:     1896,
  BAL:     5728,
  KNC:     1982,
  REN:     2539,
  NMR:     1732,
  TRX:     1958,
  XLM:     512,
  VET:     3077,
  EOS:     1765,
  XTZ:     2011,
  ALGO:    4030,
  HBAR:    4642,
  ICP:     8916,
  FTM:     3513,
  SAND:    6210,
  MANA:    1966,
  AXS:     6783,
  ENJ:     1883,
  CHZ:     4066,
  GALA:    7080,
  IMX:     10603,
  LRC:     1934,
  MASK:    8536,
  OCEAN:   3911,
  ANKR:    3783,
  BAT:     1697,
  ZIL:     2469,
  ICX:     2099,
  ONT:     2566,
  IOTA:    1720,
  NANO:    1567,
  SC:      1042,
  DGB:     109,
  ZEC:     1437,
  DASH:    131,
  XMR:     328,
  BCH:     1831,
  ETC:     1321,
  EGLD:    6892,
  KAVA:    4846,
  THETA:   2416,
  FET:     3773,
  ROSE:    7653,
  CFX:     7334,
  RNDR:    5690,
  STX:     4847,
  KAS:     20396,
  SEI:     23149,
  WLD:     13502,
  PYTH:    28177,
  JTO:     29900,
  JUPITER: 29210,
  JUP:     29210,
  BLUR:    23121,
  PENDLE:  9481,
  RUNE:    4157,
  OSMO:    12220,
  CKB:     4948,
};

// Fallback colors when CMC image fails to load
const FALLBACK: Record<string, { bg: string; label: string }> = {
  BTC:    { bg: "#F7931A", label: "₿" },
  ETH:    { bg: "#627EEA", label: "Ξ" },
  SOL:    { bg: "#9945FF", label: "◎" },
  BNB:    { bg: "#F3BA2F", label: "B" },
  XRP:    { bg: "#00AAE4", label: "✕" },
  ADA:    { bg: "#0033AD", label: "₳" },
  DOGE:   { bg: "#C2A633", label: "Ð" },
  AVAX:   { bg: "#E84142", label: "A" },
  DOT:    { bg: "#E6007A", label: "●" },
  LINK:   { bg: "#2A5ADA", label: "⬡" },
  MATIC:  { bg: "#8247E5", label: "M" },
  UNI:    { bg: "#FF007A", label: "U" },
  ATOM:   { bg: "#2E3148", label: "⚛" },
  LTC:    { bg: "#A0A0A0", label: "Ł" },
  NEAR:   { bg: "#000000", label: "N" },
  ARB:    { bg: "#12AAFF", label: "A" },
  OP:     { bg: "#FF0420", label: "O" },
  SPX:    { bg: "#1D4ED8", label: "S" },
  NDX:    { bg: "#0EA5E9", label: "N" },
  GOLD:   { bg: "#D4AF37", label: "Au" },
  SILVER: { bg: "#A8A9AD", label: "Ag" },
  OIL:    { bg: "#374151", label: "🛢" },
};

interface CryptoIconProps {
  symbol: string;
  size?: number;
}

export function CryptoIcon({ symbol, size = 24 }: CryptoIconProps) {
  const upper = symbol.toUpperCase();
  const cmcId = CMC_IDS[upper];
  const [imgFailed, setImgFailed] = useState(false);

  const fallback = FALLBACK[upper] ?? { bg: "#8fa670", label: upper.slice(0, 2) };

  if (cmcId && !imgFailed) {
    return (
      <img
        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${cmcId}.png`}
        alt={symbol}
        width={size}
        height={size}
        onError={() => setImgFailed(true)}
        style={{ borderRadius: "50%", flexShrink: 0, display: "inline-block" }}
      />
    );
  }

  // Fallback: colored circle with symbol
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: fallback.bg,
        color: "#fff",
        fontSize: size * 0.4,
        fontWeight: 700,
        flexShrink: 0,
        lineHeight: 1,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {fallback.label}
    </span>
  );
}
