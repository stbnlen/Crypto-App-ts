import React from 'react';

const titles: Array<string> = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

export const TableHead = () => {
  return (
    <thead>
      <tr>
        {titles.map((title) => (
          <td key={title}>{title}</td>
        ))}
      </tr>
    </thead>
  );
};
