import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { SearchInput } from '@components/SearchInput';
import { TableCoins } from '@components/TableCoins';
import { useFetchData } from '@hooks/useFetchData';
import React from 'react';

export const App = () => {
  const { handleSearch, coins, search } = useFetchData();
  return (
    <div className="container">
      <div className="row">
        <SearchInput handleSearch={handleSearch} />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
};
