export type Coin = {
  id: string;
  name: string;
  market_cap_rank: string;
  current_price: string;
  price_change_percentage_24h: number;
  total_volume: string;
  image: string;
  symbol: string;
};

export const getFilteredCoins = (coins: Coin[], search: string): Coin[] => {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase()),
  );

  return filteredCoins;
};
