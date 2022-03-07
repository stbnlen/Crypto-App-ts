import { Coin } from '@utils/getFilteredCoins';
import React from 'react';

import { CoinRow } from '../CoinRow';

type Props = {
  filteredCoins: Coin[];
};

export const TableBody: React.FC<Props> = ({ filteredCoins }) => {
  console.log(filteredCoins);
  return (
    <tbody>
      {filteredCoins.map((coin) => (
        <CoinRow key={coin.id} {...coin} />
      ))}
    </tbody>
  );
};
