export interface MarketAsset {
  symbol: string;
  name: string;
  pair: string;
  price: number;
  change24h: number;
  volume24h: string;
  maxLeverage: string;
  type: "Crypto" | "Alt" | "Meme" | "Indice" | "Commodity";
}

export const marketAssets: MarketAsset[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    pair: "BTC/USDC",
    price: 63733.75,
    change24h: 2.5,
    volume24h: "415.35M",
    maxLeverage: "5x",
    type: "Crypto",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    pair: "ETH/USDC",
    price: 1668.99,
    change24h: -1.2,
    volume24h: "168.69M",
    maxLeverage: "5x",
    type: "Crypto",
  },
  {
    symbol: "SOL",
    name: "Solana",
    pair: "SOL/USDC",
    price: 67.19,
    change24h: 4.8,
    volume24h: "51.39M",
    maxLeverage: "2x",
    type: "Alt",
  },
  {
    symbol: "ARB",
    name: "Arbitrum",
    pair: "ARB/USDC",
    price: 0.084,
    change24h: -0.5,
    volume24h: "598.2K",
    maxLeverage: "2x",
    type: "Alt",
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    pair: "DOGE/USDC",
    price: 0.08792,
    change24h: 1.2,
    volume24h: "10.79M",
    maxLeverage: "2x",
    type: "Meme",
  },
  {
    symbol: "PEPE",
    name: "Pepe",
    pair: "PEPE/USDC",
    price: 0.00000282,
    change24h: 15.4,
    volume24h: "10.49M",
    maxLeverage: "2x",
    type: "Meme",
  },
  {
    symbol: "XAUT",
    name: "Tether Gold",
    pair: "XAUT/USDC",
    price: 4195.2,
    change24h: 0.1,
    volume24h: "893.6K",
    maxLeverage: "2x",
    type: "Commodity",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    pair: "AAPLon/USDC",
    price: 291.21,
    change24h: 0.8,
    volume24h: "N/A",
    maxLeverage: "2x",
    type: "Indice",
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    pair: "TSLAon/USDC",
    price: 402.75,
    change24h: -2.1,
    volume24h: "N/A",
    maxLeverage: "2x",
    type: "Indice",
  },
  {
    symbol: "NVDA",
    name: "Nvidia",
    pair: "NVDAon/USDC",
    price: 124.82,
    change24h: 3.2,
    volume24h: "N/A",
    maxLeverage: "2x",
    type: "Indice",
  },
];
