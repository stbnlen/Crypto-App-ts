import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useFetchData = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const getData = async () => {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1',
    );
    setCoins(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    handleSearch,
    coins,
    search,
  };
};
