import { TableHead } from 'components/TableHead';
import React from 'react';
import { Coin, getFilteredCoins } from 'utils/getFilteredCoins';

import { TableBody } from '../TableBody';

type Props = {
  coins: Coin[];
  search: string;
};

export const TableCoins: React.FC<Props> = ({ coins, search }) => {
  const filteredCoins = getFilteredCoins(coins, search);
  return (
    <table className="table table-dark mt-4 table-hover">
      <TableHead />
      <TableBody filteredCoins={filteredCoins} />
    </table>
  );
};
