import React from 'react';

type CoinProps = {
  name: string;
  market_cap_rank: string;
  current_price: string;
  price_change_percentage_24h: number;
  total_volume: string;
  image: string;
  symbol: string;
};

export const CoinRow: React.FC<CoinProps> = ({
  name,
  market_cap_rank,
  current_price,
  price_change_percentage_24h,
  total_volume,
  image,
  symbol,
}) => {
  return (
    <tr>
      <td>{market_cap_rank}</td>
      <td>
        <img src={image} alt={name} style={{ width: '3%' }} className="me-4 img-fluid" />
        <span>{name}</span>
        <span className="ms-3 text-muted text-uppercase">{symbol}</span>
      </td>
      <td>{current_price}</td>
      <td className={price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
        {price_change_percentage_24h}
      </td>
      <td>{total_volume}</td>
    </tr>
  );
};
